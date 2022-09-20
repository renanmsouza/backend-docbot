import { PartialType } from '@nestjs/swagger';
import { CreateExcecaoGrupoDto } from './create-excecao-grupo.dto';

export class UpdateExcecaoGrupoDto extends PartialType(CreateExcecaoGrupoDto) {}
