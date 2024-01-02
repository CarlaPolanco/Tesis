import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TraduccionesService } from './traducciones.service';
import { CreateTraduccioneDto } from './dto/create-traduccione.dto';
import { UpdateTraduccioneDto } from './dto/update-traduccione.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Traducciones')
@Controller('traducciones')
export class TraduccionesController {
  constructor(private readonly traduccionesService: TraduccionesService) { }

  @Post()
  create(@Body() createTraduccioneDto: CreateTraduccioneDto) {
    return this.traduccionesService.create(createTraduccioneDto);
  }

  @Get()
  findAll() {
    return this.traduccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.traduccionesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.traduccionesService.remove(id);
  }
}
