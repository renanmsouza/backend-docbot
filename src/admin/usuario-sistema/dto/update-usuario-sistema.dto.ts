import { PartialType } from '@nestjs/swagger';
import { CreateUsuarioSistemaDto } from './create-usuario-sistema.dto';

export class UpdateUsuarioSistemaDto extends PartialType(CreateUsuarioSistemaDto) {}
