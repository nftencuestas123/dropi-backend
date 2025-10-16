import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dtos/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async crearUsuario(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.crearUsuario(dto);
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: string) {
    return this.usuariosService.obtenerPorId(id);
  }

  @Get()
  async listar() {
    return this.usuariosService.listar();
  }
}
