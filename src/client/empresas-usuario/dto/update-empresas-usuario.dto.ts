import { PartialType } from '@nestjs/swagger';
import { CreateEmpresasUsuarioDto } from './create-empresas-usuario.dto';

export class UpdateEmpresasUsuarioDto extends PartialType(CreateEmpresasUsuarioDto) {}
