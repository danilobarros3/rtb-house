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

      const dataSellers = await this.prisma.seller.findMany({
        where,
      });
      const totalSellers = await this.prisma.seller.count({ where });

      return {
        dataSellers,
        totalSellers,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
