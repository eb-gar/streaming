import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { MovieService } from 'src/movie/movie.service';
import { PrismaClient as PrismaContenidoClient } from './../../generated/prisma-contenido';
import { PrismaClient as PrismaPeliculaClient } from './../../generated/prisma-pelicula';
import { PrismaClient as PrismaSerieClient } from './../../generated/prisma-serie';

@Module({
  controllers: [ContentController],
  providers: [
    ContentService,
    MovieService,
    PrismaContenidoClient,
    PrismaPeliculaClient,
    PrismaSerieClient,
  ],
})
export class ContentModule {}
