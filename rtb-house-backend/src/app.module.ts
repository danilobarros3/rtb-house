import { Module } from '@nestjs/common';
import { OrdersController } from './modules/orders/controller/orders.controller';
import { OrdersService } from './modules/orders/services/orders.service';
import { SellersController } from './modules/sellers/controller/sellers.controller';
import { SellersService } from './modules/sellers/services/sellers.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [OrdersController, SellersController],
  providers: [PrismaService, OrdersService, SellersService],
})
export class AppModule {}
