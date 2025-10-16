import { IsInt, Min } from 'class-validator';

export class EditStockDto {
  @IsInt()
  @Min(0)
  nuevo_stock: number;
}
