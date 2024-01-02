import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TranscripcionesService } from './transcripciones.service';
import { CreateTranscripcioneDto } from './dto/create-transcripcione.dto';
import { UpdateTranscripcioneDto } from './dto/update-transcripcione.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('transcripciones')
@Controller('transcripciones')
export class TranscripcionesController {
  constructor(private readonly transcripcionesService: TranscripcionesService) { }

  @Post()
  create(@Body() createTranscripcioneDto: CreateTranscripcioneDto) {
    return this.transcripcionesService.create(createTranscripcioneDto);
  }

  @Get()
  findAll() {
    return this.transcripcionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transcripcionesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transcripcionesService.remove(+id);
  }
}
