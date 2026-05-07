import { Controller, Get, Query } from '@nestjs/common';
import { SellersDto } from '../dto/sellers.dto';
import { SellersService } from '../services/sellers.service';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Get()
  findAllSellers(@Query() query: SellersDto) {
    return this.sellersService.findAllSellers(query);
  }
}
