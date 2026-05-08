import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class ListOrdersDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  orderId?: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  sellerId?: number;

  @IsString()
  @Length(3, 3)
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  product?: string;

  @IsString()
  @IsOptional()
  search?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  page = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit = 10;
}
