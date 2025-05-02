import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaSerieClient } from './../../generated/prisma-serie';

@Injectable()
export class SerieService {
  constructor(private readonly prismaSerie: PrismaSerieClient) {}

  findAll() {
    return this.prismaSerie.serie.findMany();
  }


  getSerie(id_content: number) {
    return this.prismaSerie.serie.findUnique({
      where: { id_content },
    });
  }
}