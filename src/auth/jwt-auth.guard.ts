import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token');
    }
    const token = authHeader.replace('Bearer ', '');

    try {
      const payload = jwt.verify(token, (process.env.JWTSECRET || '') as string);
      request.user = payload;
      return true;
    } catch (e) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
