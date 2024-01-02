import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transcripcione } from './entities/transcripcione.entity';
import { TranscripcionesService } from './transcripciones.service';
import { TranscripcionesController } from './transcripciones.controller';
import { VideosModule } from 'src/videos/videos.module';
import { VideosService } from 'src/videos/videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transcripcione]), VideosModule],
  controllers: [TranscripcionesController],
  providers: [TranscripcionesService, VideosService],
})
export class TranscripcionesModule { }
