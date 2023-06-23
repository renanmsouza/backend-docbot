import { PartialType } from '@nestjs/swagger';
import { CreateExcecaoContatoDto } from './create-excecao-contato.dto';

export class UpdateExcecaoContatoDto extends PartialType(CreateExcecaoContatoDto) {}
