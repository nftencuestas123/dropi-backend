import { IsString, IsEmail } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsString()
  telefono: string;

  @IsString()
  empresa: string;
}
