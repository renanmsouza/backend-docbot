import { PartialType } from '@nestjs/swagger';
import { CreateCelularResponsavelDto } from './create-celular-responsavel.dto';

export class UpdateCelularResponsavelDto extends PartialType(CreateCelularResponsavelDto) {}
