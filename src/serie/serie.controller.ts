import { Controller, Get, Param } from '@nestjs/common';
import { SerieService } from './serie.service';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Get()
    findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
    getSerie(@Param('id') id: string) {
    return this.serieService.getSerie(+id);
  }
}