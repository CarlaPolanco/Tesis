import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.entity';

@Injectable()
export class VideosService {

  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
  ) { }

  async create(createVideoDto: CreateVideoDto) {
    return await this.videoRepository.save(createVideoDto);
  }

  async findAll() {
    return await this.videoRepository.find();
  }

  async findOne(url: string) {
    return await this.videoRepository.findOneBy({ url });
  }

  async update(url: string, updateVideoDto: UpdateVideoDto) {
    return await this.videoRepository.update({ url }, updateVideoDto);
  }

  async remove(url: string) {
    return await this.videoRepository.delete({ url });
  }
}
