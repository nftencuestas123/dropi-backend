import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('images')
export class ImageUploadController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req: any, file: any, callback: any) => {
          const uniqueName = Date.now() + extname(file.originalname);
          callback(null, uniqueName);
        }
      })
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body('section') section: string) {
    // Aquí puedes guardar el registro en tu base de datos (nombre del archivo y sección)
    return {
      mensaje: 'Imagen subida!',
      filename: file.filename,
      seccion: section
    };
  }
}
