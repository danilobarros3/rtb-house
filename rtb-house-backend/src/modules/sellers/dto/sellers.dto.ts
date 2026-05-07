import { IsOptional, IsString } from 'class-validator';

export class SellersDto {
  @IsString()
  @IsOptional()
  sellerName?: string;
}
