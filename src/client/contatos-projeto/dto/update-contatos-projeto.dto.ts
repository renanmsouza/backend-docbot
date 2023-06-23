import { PartialType } from '@nestjs/swagger';
import { CreateContatosProjetoDto } from './create-contatos-projeto.dto';

export class UpdateContatosProjetoDto extends PartialType(CreateContatosProjetoDto) {}
