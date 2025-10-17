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
        filename: (req, file, callback) => {
          const uniqueName = Date.now() + extname(file.originalname);
          callback(null, uniqueName);
        }
      })
    })
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('section') section: string
  ) {
    return {
      mensaje: 'Imagen subida!',
      filename: file.filename,
      seccion: section
    };
  }
}
