import { PartialType } from '@nestjs/mapped-types';
import { CreateTranscripcioneDto } from './create-transcripcione.dto';

export class UpdateTranscripcioneDto extends PartialType(CreateTranscripcioneDto) {}
