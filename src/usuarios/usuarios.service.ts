import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dtos/create-usuario.dto';

@Injectable()
export class UsuariosService {
  private usuarios: any[] = []; // Temporal, reemplaza por base de datos real

  async crearUsuario(dto: CreateUsuarioDto) {
    const usuario = { id: `${Date.now()}`, ...dto };
    this.usuarios.push(usuario);
    return usuario;
  }

  async obtenerPorId(id: string) {
    return this.usuarios.find(u => u.id === id);
  }

  async listar() {
    return this.usuarios;
  }
}
