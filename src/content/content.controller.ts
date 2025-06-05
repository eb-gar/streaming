import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { ContentService } from './content.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('content')
export class ContentController {
  
  constructor(private readonly contentService: ContentService) {}

  @Get()
  @Auth({ roles: ['ADMIN', 'USER'], permissions: ['view_content'] })
  async findAll() {
    return this.contentService.findAll();
  }

  @Post()
  @Auth({ roles: ['ADMIN', 'EDITOR'], permissions: ['create_content'] })
  async create(@Body() data: any) {
    return this.contentService.create(data);
  }

  @Put(':id')
  @Auth({ roles: ['ADMIN'], permissions: ['edit_content'] })
  async post(@Param('id') id: string, @Body() data: any) {
    return this.contentService.post(Number(id), data);
  }

  @Patch(':id')
  @Auth({ roles: ['ADMIN'], permissions: ['edit_content'] })
  async patch(@Param('id') id: string, @Body() data: any) {
    return this.contentService.patch(Number(id), data);
  }

  @Delete(':id')
  @Auth({ roles: ['ADMIN'], permissions: ['delete_content'] })
  async delete(@Param('id') id: string) {
    return this.contentService.delete(Number(id));
  }
}