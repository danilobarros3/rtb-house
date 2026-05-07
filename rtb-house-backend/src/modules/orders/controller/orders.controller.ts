import { Controller, Get, Query } from '@nestjs/common';
import { ListOrdersDto } from '../dto/list-orders.dto';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAllOrders(@Query() query: ListOrdersDto) {
    return this.ordersService.findAllOrders(query);
  }
}
