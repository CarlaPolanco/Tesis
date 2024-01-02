import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResumeneDto } from './dto/create-resumene.dto';
import { UpdateResumeneDto } from './dto/update-resumene.dto';
import { Resumene } from './entities/resumene.entity';
import { Video } from 'src/videos/entities/video.entity';

@Injectable()
export class ResumenesService {

  constructor(
    @InjectRepository(Resumene)
    private readonly resumeneRepository: Repository<Resumene>,

    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>
  ) { }

  async create(createResumeneDto: CreateResumeneDto) {

    const video = await this.videoRepository.findOneBy({ url: createResumeneDto.url_video });

    console.log(video)

    if (!video) {
      throw new BadRequestException('El video no existe');
    }

    return await this.resumeneRepository.save({
      ...createResumeneDto,
      video
    });
  }

  async findAll() {
    return await this.resumeneRepository.find();
  }

  async findOne(id: number) {
    return await this.resumeneRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.resumeneRepository.delete({ id });
  }
}
