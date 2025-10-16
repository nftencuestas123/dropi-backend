import { Injectable } from '@nestjs/common';

@Injectable()
export class CrmService {
  async crearFicha(datos: any) {
    // Lógica para creación de ficha cliente y llamada a IA si es necesario
    return { creado: true, datos };
  }
}
