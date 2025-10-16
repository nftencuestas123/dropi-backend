import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const token = await this.authService.validarUsuario(dto.email, dto.password);
    if (!token) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    return { acceso: token };
  }
}
