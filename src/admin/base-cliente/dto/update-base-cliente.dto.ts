import { PartialType } from '@nestjs/mapped-types';
import { CreateBaseClienteDto } from './create-base-cliente.dto';

export class UpdateBaseClienteDto extends PartialType(CreateBaseClienteDto) {}
