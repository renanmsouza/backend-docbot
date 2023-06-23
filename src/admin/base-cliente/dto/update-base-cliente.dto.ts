import { PartialType } from '@nestjs/swagger';
import { CreateBaseClienteDto } from './create-base-cliente.dto';

export class UpdateBaseClienteDto extends PartialType(CreateBaseClienteDto) {}
