import { Module } from '@nestjs/common';

import { AuthModule } from './auth';
import { UsuariosModule } from './usuarios';
import { ProductosModule } from './productos';
import { CrmModule } from './crm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    UsuariosModule,
    ProductosModule,
    CrmModule,
    // Agrega aquí más módulos si introduces nuevas funciones (ejemplo: NotificacionesModule)
  ],
  // providers: [], // Si tienes servicios globales o interceptores, agrégalos aquí
})
export class AppModule {}
