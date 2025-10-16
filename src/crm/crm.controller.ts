import { Controller, Post, Body } from '@nestjs/common';

@Controller('crm')
export class CrmController {
  @Post('crear-ficha')
  async crearFicha(@Body() datos: any) {
    // Aquí va la lógica para crear ficha cliente (puede llamar servicio IA si configuras)
    return { status: 'ok', datos };
  }
}
