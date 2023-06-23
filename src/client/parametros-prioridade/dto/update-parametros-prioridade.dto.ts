import { PartialType } from '@nestjs/swagger';
import { CreateParametrosPrioridadeDto } from './create-parametros-prioridade.dto';

export class UpdateParametrosPrioridadeDto extends PartialType(CreateParametrosPrioridadeDto) {}
