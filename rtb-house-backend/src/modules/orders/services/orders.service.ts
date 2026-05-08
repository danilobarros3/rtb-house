import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { ListOrdersDto } from '../dto/list-orders.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllOrders(filters: ListOrdersDto) {
    try {
      const {
        orderId,
        sellerId,
        country,
        product,
        search,
        page = 1,
        limit = 10,
      } = filters;
      const skip = (page - 1) * limit;
      const normalizedSearch = search?.trim();
      const searchIsNumeric =
        normalizedSearch !== undefined && /^[0-9]+$/.test(normalizedSearch);

      const where: Prisma.OrderWhereInput = {
        ...(orderId !== undefined && { orderId }),
        ...(sellerId !== undefined && { sellerId }),
        ...(country && { country: country.toUpperCase() }),
        ...(product && { product: { contains: product, mode: 'insensitive' } }),
        ...(normalizedSearch && {
          OR: [
            { product: { contains: normalizedSearch, mode: 'insensitive' } },
            ...(searchIsNumeric
              ? [
                  { orderId: Number(normalizedSearch) },
                  { sellerId: Number(normalizedSearch) },
                ]
              : []),
          ],
        }),
      };

      const dataOrders = await this.prisma.order.findMany({
        where,
        skip,
        take: limit,
        orderBy: { orderId: 'asc' },
      });
      const totalOrders = await this.prisma.order.count({ where });

      return {
        dataOrders,
        pagination: {
          page,
          limit,
          totalOrders,
          totalPages: Math.ceil(totalOrders / limit),
        },
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
