import { Controller, Get, Param } from '@nestjs/common';
import { SerieService } from './serie.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Get()
  @Auth({ roles: ['ADMIN', 'USER'], permissions: ['view_series'] })
    findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
  @Auth({ roles: ['ADMIN', 'USER'], permissions: ['view_series'] })
    getSerie(@Param('id') id: string) {
    return this.serieService.getSerie(+id);
  }
}