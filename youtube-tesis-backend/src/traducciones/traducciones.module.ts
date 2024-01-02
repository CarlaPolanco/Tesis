import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Traduccione } from './entities/traduccione.entity';
import { TraduccionesService } from './traducciones.service';
import { TraduccionesController } from './traducciones.controller';
import { VideosModule } from 'src/videos/videos.module';
import { VideosService } from 'src/videos/videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Traduccione]), VideosModule],
  controllers: [TraduccionesController],
  providers: [TraduccionesService, VideosService],
})
export class TraduccionesModule { }
