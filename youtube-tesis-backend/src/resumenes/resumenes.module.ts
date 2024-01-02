import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resumene } from './entities/resumene.entity';
import { ResumenesService } from './resumenes.service';
import { ResumenesController } from './resumenes.controller';
import { VideosModule } from 'src/videos/videos.module';
import { VideosService } from 'src/videos/videos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Resumene]), VideosModule],
  controllers: [ResumenesController],
  providers: [ResumenesService, VideosService],
})
export class ResumenesModule { }
