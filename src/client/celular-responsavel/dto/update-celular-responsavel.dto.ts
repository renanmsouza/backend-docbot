import { PartialType } from '@nestjs/mapped-types';
import { CreateCelularResponsavelDto } from './create-celular-responsavel.dto';

export class UpdateCelularResponsavelDto extends PartialType(CreateCelularResponsavelDto) {}
