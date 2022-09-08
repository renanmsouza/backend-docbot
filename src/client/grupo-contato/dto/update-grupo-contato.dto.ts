import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoContatoDto } from './create-grupo-contato.dto';

export class UpdateGrupoContatoDto extends PartialType(CreateGrupoContatoDto) {}
