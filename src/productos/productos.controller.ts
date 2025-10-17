import { Controller } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { EditStockDto } from './dtos/edit-stock.dto';

@Controller()
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  async subidaMasivaUploadedFile(archivo: any, usarIA: boolean) {
    // Tu lógica aquí
  }
}
