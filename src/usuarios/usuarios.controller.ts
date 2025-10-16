import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dtos/create-usuario.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('solo-admin')
  async getSoloAdmin() {
    return { mensaje: 'Solo admins acceden' };
  }
}
