import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { PrismaClient as PrismaSerieClient } from './../../generated/prisma-serie';

@Module({
  controllers: [SerieController],
  providers: [SerieService, PrismaSerieClient],
})
export class SerieModule {}
