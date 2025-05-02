import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { MovieModule } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';

@Module({
  imports: [ContentModule, MovieModule, SerieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}