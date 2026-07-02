import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('api/organizations') // Questo è il prefisso che abbiamo impostato nel frontend
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll() {
    return this.organizationsService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.organizationsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.organizationsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.organizationsService.remove(id);
  }
}