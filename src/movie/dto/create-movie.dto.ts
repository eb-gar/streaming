import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateMovieDto {
  @IsInt()
  id_contenido: number;

  @IsString()
  genero: string;

  @IsInt()
  duracion: number; // en minutos

  @IsDateString()
  fecha: string; // fecha de estreno

  @IsString()
  actores: string;

  @IsString()
  productora: string;
}