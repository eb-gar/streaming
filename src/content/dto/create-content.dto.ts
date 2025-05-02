import { IsString } from 'class-validator';

export class CreateContentDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;
}