import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioSistemaDto } from './create-usuario-sistema.dto';

export class UpdateUsuarioSistemaDto extends PartialType(CreateUsuarioSistemaDto) {}
