import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateSerieDto {
  @IsInt()
  id_contenido: number;

  @IsString()
  genero: string;

  @IsInt()
  duracion: number; // duración promedio por capítulo

  @IsDateString()
  fecha: string; // fecha de estreno

  @IsString()
  actores: string;

  @IsString()
  productora: string;
}