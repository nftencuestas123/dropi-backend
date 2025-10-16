import { Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async validarUsuario(email: string, password: string): Promise<string | null> {
    const usuario = (await this.usuariosService.listar()).find(
      u => u.email === email && u.password === password
    );

    if (!usuario) return null;

    const token = jwt.sign(
      { sub: usuario.id, email: usuario.email, esAdmin: usuario.esAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    return token;
  }
}
