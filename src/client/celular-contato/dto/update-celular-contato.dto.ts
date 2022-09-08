import { PartialType } from '@nestjs/mapped-types';
import { CreateCelularContatoDto } from './create-celular-contato.dto';

export class UpdateCelularContatoDto extends PartialType(CreateCelularContatoDto) {}
