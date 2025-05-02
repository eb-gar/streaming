import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaPeliculaClient } from './../../generated/prisma-pelicula';

@Injectable()
export class MovieService {
  constructor(private readonly prismaMovie: PrismaPeliculaClient) {}

  findAll() {
    return this.prismaMovie.movie.findMany();
  }

  getMovie(id_content: number) {
    return this.prismaMovie.movie.findUnique({
      where: { id_content },
    });
  }
}