import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresasUsuarioDto } from './create-empresas-usuario.dto';

export class UpdateEmpresasUsuarioDto extends PartialType(CreateEmpresasUsuarioDto) {}
