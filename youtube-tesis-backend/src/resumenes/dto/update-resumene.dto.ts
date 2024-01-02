import { PartialType } from '@nestjs/mapped-types';
import { CreateResumeneDto } from './create-resumene.dto';

export class UpdateResumeneDto extends PartialType(CreateResumeneDto) {}
