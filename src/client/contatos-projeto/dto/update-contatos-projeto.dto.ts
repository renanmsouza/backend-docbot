import { PartialType } from '@nestjs/mapped-types';
import { CreateContatosProjetoDto } from './create-contatos-projeto.dto';

export class UpdateContatosProjetoDto extends PartialType(CreateContatosProjetoDto) {}
