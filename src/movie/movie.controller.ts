import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @Auth({ roles: ['ADMIN', 'USER'], permissions: ['view_movies'] })
   findAll() {
    return this.movieService.findAll();
  }


  @Get(':id')
  @Auth({ roles: ['ADMIN', 'USER'], permissions: ['view_movies'] })
  getMovie(@Param('id') id: string) {
    return this.movieService.getMovie(+id);
  }
}