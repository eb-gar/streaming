import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
   findAll() {
    return this.movieService.findAll();
  }


  @Get(':id')
   getMovie(@Param('id') id: string) {
    return this.movieService.getMovie(+id);
  }
}