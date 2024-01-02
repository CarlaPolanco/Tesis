import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTraduccioneDto } from './dto/create-traduccione.dto';
import { Traduccione } from './entities/traduccione.entity';
import { Video } from 'src/videos/entities/video.entity';

@Injectable()
export class TraduccionesService {

  constructor(
    @InjectRepository(Traduccione)
    private readonly traduccioneRepository: Repository<Traduccione>,

    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>
  ) { }

  async create(createTraduccioneDto: CreateTraduccioneDto) {
    const video = await this.videoRepository.findOneBy({ url: createTraduccioneDto.url_video });

    console.log(video)

    if (!video) {
      throw new BadRequestException('El video no existe');
    }

    return await this.traduccioneRepository.save({
      ...createTraduccioneDto,
      video
    });
  }

  async findAll() {
    return await this.traduccioneRepository.find();
  }

  async findOne(videoUrl: string) {
    return await this.traduccioneRepository.findOne({ where: { video: { url: videoUrl } } });
  }

  async remove(id: number) {
    return await this.traduccioneRepository.delete({ id });
  }
}
