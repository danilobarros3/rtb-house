import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { SellersDto } from '../dto/sellers.dto';

@Injectable()
export class SellersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllSellers(filters: SellersDto) {
    try {
      const { sellerName } = filters;

      const where: Prisma.SellerWhereInput = {
        ...(sellerName && {
          name: { contains: sellerName, mode: 'insensitive' },
        }),
      };

      const sellers = await this.prisma.seller.findMany({
        where,
        orderBy: { id: 'asc' },
      });

      const sellerIds = sellers.map((seller) => seller.id);

      const totalPriceBySellerId = await this.prisma.order.groupBy({
        by: ['sellerId'],
        where: {
          sellerId: {
            in: sellerIds,
          },
        },
        _sum: {
          price: true,
        },
      });

      const totalPriceMap = new Map<number, number>(
        totalPriceBySellerId.map((item) => [
          item.sellerId,
          item._sum.price ?? 0,
        ]),
      );

      const dataSellers = sellers.map((seller) => ({
        ...seller,
        totalPrice: totalPriceMap.get(seller.id) ?? 0,
      }));

      const totalSellers = sellers.length;

      return {
        dataSellers,
        totalSellers,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Failed to get sellers, try again later',
      );
    }
  }
}
