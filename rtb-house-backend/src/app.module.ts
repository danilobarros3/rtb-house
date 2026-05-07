import { Module } from '@nestjs/common';
import { OrdersController } from './modules/orders/controller/orders.controller';
import { OrdersService } from './modules/orders/services/orders.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [PrismaService, OrdersService],
})
export class AppModule {}
