import { Module } from '@nestjs/common';

import { AuthModule } from './auth';
import { UsuariosModule } from './usuarios';
import { ProductosModule } from './productos';
import { CrmModule } from './crm';
import { ConfigModule } from '@nestjs/config';

import { ImageUploadController } from './image-upload/image-upload.controller';

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
  ],
  controllers: [
    ImageUploadController,
    // Si tienes otros controladores agrégalos aquí
  ],
})
export class AppModule {}
