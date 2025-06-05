import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaContenidoClient } from './../../generated/prisma-contenido';
import { PrismaClient as PrismaPeliculaClient } from './../../generated/prisma-pelicula';
import { PrismaClient as PrismaSerieClient } from './../../generated/prisma-serie';

@Injectable()
export class ContentService {
  constructor(
    private prismaContent: PrismaContenidoClient,
    private prismaMovie: PrismaPeliculaClient,
    private prismaSerie: PrismaSerieClient,
  ) {}

  async findAll() {
    const content = await this.prismaContent.content.findMany();

    const results = await Promise.all(
      content.map(async (content) => {
        if (content.type === 'movie') {
          const detail = await this.prismaMovie.movie.findFirst({
            where: { id_content: content.id },
          });
          return { ...content, detail: detail };
        } else if (content.type === 'serie') {
          const detail = await this.prismaSerie.serie.findFirst({
            where: { id_content: content.id },
          });
          return { ...content, detail: detail };
        }
        return content;
      }),
    );

    return results;
  }

  async create(body: any) {
    const { name, type, genre, duration, date, actors, producer } = body;

    const content = await this.prismaContent.content.create({
      data: { name, type },
    });

    const id_content = content.id; 

    if (type === 'movie' && genre && duration && date && actors && producer) {
      await this.prismaMovie.movie.create({
        data: {
          id_content,
          genre,
          duration,
          date,
          actors,
          producer,
        },
      });
    }

    else if (type === 'serie' && genre) {
      await this.prismaSerie.serie.create({
        data: {
          id_content,
          genre,
          duration,
          date,
          actors,
          producer,
        },
      });
    }

    return content; 
  }

  async post(id: number, data: any) {
    const { name, type, ...resto } = data;

    const content = await this.prismaContent.content.update({
      where: { id },
      data: { name, type },
    });

    if (type === 'pelicula') {
      await this.prismaMovie.movie.updateMany({
        where: { id_content: id },
        data: resto,
      });
    } else if (type === 'serie') {
      await this.prismaSerie.serie.updateMany({
        where: { id_content: id },
        data: resto,
      });
    }

    return content;
  }

  async patch(id: number, data: any) {
    const content = await this.prismaContent.content.update({
      where: { id },
      data,
    });

    const { type, ...resto } = data;

    if (type === 'movie') {
      await this.prismaMovie.movie.updateMany({
        where: { id_content: id },
        data: resto,
      });
    } else if (type === 'serie') {
      await this.prismaSerie.serie.updateMany({
        where: { id_content: id },
        data: resto,
      });
    }

    return content;
  }

  async delete(id: number) {
  const content = await this.prismaContent.content.findUnique({ where: { id } });

  if (!content) {
    throw new Error('Content not found');
  }

  if (content.type === 'movie') {
    await this.prismaMovie.movie.deleteMany({ where: { id_content: id } });
  } else if (content.type === 'serie') {
    await this.prismaSerie.serie.deleteMany({ where: { id_content: id } });
  }

  await this.prismaContent.content.delete({ where: { id } });

  return { message: `Content with ID ${id} deleted successfully.` };
}

}
