import { PartialType } from '@nestjs/mapped-types';
import { CreateExcecaoContatoDto } from './create-excecao-contato.dto';

export class UpdateExcecaoContatoDto extends PartialType(CreateExcecaoContatoDto) {}
