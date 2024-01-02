import { PartialType } from '@nestjs/mapped-types';
import { CreateTraduccioneDto } from './create-traduccione.dto';

export class UpdateTraduccioneDto extends PartialType(CreateTraduccioneDto) {}
