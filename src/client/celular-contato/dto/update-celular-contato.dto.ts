import { PartialType } from '@nestjs/swagger';
import { CreateCelularContatoDto } from './create-celular-contato.dto';

export class UpdateCelularContatoDto extends PartialType(CreateCelularContatoDto) {}
