import { PartialType } from '@nestjs/mapped-types';
import { CreateParametrosPrioridadeDto } from './create-parametros-prioridade.dto';

export class UpdateParametrosPrioridadeDto extends PartialType(CreateParametrosPrioridadeDto) {}
