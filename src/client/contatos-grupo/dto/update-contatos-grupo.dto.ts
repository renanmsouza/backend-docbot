import { PartialType } from '@nestjs/swagger';
import { CreateContatosGrupoDto } from './create-contatos-grupo.dto';

export class UpdateContatosGrupoDto extends PartialType(CreateContatosGrupoDto) {}
