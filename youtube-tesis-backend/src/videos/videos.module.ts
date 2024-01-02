import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { Traduccione } from 'src/traducciones/entities/traduccione.entity';
import { Transcripcione } from 'src/transcripciones/entities/Transcripcione.entity';
import { Resumene } from 'src/resumenes/entities/resumene.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Video, Traduccione, Transcripcione, Resumene])],
  controllers: [VideosController],
  providers: [VideosService],
  exports: [TypeOrmModule]
})
export class VideosModule { }
