import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumenesService } from './resumenes.service';
import { CreateResumeneDto } from './dto/create-resumene.dto';
import { UpdateResumeneDto } from './dto/update-resumene.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Resumenes')
@Controller('resumenes')
export class ResumenesController {
  constructor(private readonly resumenesService: ResumenesService) { }

  @Post()
  create(@Body() createResumeneDto: CreateResumeneDto) {
    return this.resumenesService.create(createResumeneDto);
  }

  @Get()
  findAll() {
    return this.resumenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumenesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumenesService.remove(+id);
  }
}
