import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dtos/create-usuario.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  private usuarios: any[] = [];

  async crearUsuario(dto: CreateUsuarioDto) {
    const hash = await bcrypt.hash(dto.password, 12);
    const usuario = { id: `${Date.now()}`, ...dto, password: hash };
    this.usuarios.push(usuario);
    return usuario;
  }

  async obtenerPorId(id: string) {
    return this.usuarios.find(u => u.id === id);
  }

  async listar() {
    return this.usuarios;
  }

  async validarCredenciales(email: string, password: string) {
    const usuario = this.usuarios.find(u => u.email === email);
    if (!usuario) return null;
    const valido = await bcrypt.compare(password, usuario.password);
    return valido ? usuario : null;
  }
}
