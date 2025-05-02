import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PrismaClient as PrismaPeliculaClient } from './../../generated/prisma-pelicula';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaPeliculaClient],
})
export class MovieModule {}
