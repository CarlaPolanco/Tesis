import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTranscripcioneDto } from './dto/create-transcripcione.dto';
import { Transcripcione } from './entities/transcripcione.entity';
import { Video } from 'src/videos/entities/video.entity';

@Injectable()
export class TranscripcionesService {

  constructor(
    @InjectRepository(Transcripcione)
    private readonly transcripcioneRepository: Repository<Transcripcione>,

    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>
  ) { }

  async create(createTranscripcioneDto: CreateTranscripcioneDto) {

    const video = await this.videoRepository.findOneBy({ url: createTranscripcioneDto.id_video });

    console.log(video);

    if (!video) {
      throw new BadRequestException('El video no existe');
    }

    return await this.transcripcioneRepository.save({
      ...createTranscripcioneDto,
      video
    });
  }

  async findOne(videoUrl: string) {
    return await this.transcripcioneRepository.findOne({ where: { video: { url: videoUrl } } });
  }

  async findAll() {
    return await this.transcripcioneRepository.find();
  }

  async remove(id: number) {
    return await this.transcripcioneRepository.delete(id);
  }
}
