import { Module } from '@nestjs/common';
import { ProductosModule } from './productos';

@Module({
  imports: [
    ProductosModule,
    // aquí agregarás el resto de tus módulos: crm, usuarios, logística, etc.
  ]
})
export class AppModule {}
