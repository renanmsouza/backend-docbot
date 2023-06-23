import { PartialType } from '@nestjs/swagger';
import { CreateGrupoContatoDto } from './create-grupo-contato.dto';

export class UpdateGrupoContatoDto extends PartialType(CreateGrupoContatoDto) {}
