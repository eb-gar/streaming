import { Controller, Get, Post, Body, Put, Patch, Param } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async findAll() {
    return this.contentService.findAll();
  }

  @Post()
  async create(@Body() data: any) {
    return this.contentService.create(data);
  }

  @Put(':id')
  async post(@Param('id') id: string, @Body() data: any) {
    return this.contentService.post(Number(id), data);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() data: any) {
    return this.contentService.patch(Number(id), data);
  }
}