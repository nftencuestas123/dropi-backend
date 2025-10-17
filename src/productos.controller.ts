import { Controller, Post, UploadedFile, UseInterceptors, Patch, Body, Param } from '@nestjs/common';
import { ProductosService } from './productos/productos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { EditStockDto } from './productos/dtos/edit-stock.dto';
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}
  @Post('subida-masiva')
  @UseInterceptors(FileInterceptor('archivo'))
  async subidaMasiva(@UploadedFile() archivo: any, @Body('usarIA') usarIA: boolean) {
    return this.productosService.subidaMasiva(archivo, usarIA);
  }
  @Patch('editar-stock/:id')
  async editarStock(@Param('id') id: string, @Body() dto: EditStockDto) {
    return this.productosService.editarStock(id, dto.nuevo_stock);
  }
}
