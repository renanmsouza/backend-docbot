import { PartialType } from '@nestjs/swagger';
import { CreateResponsaveisProjetoDto } from './create-responsaveis-projeto.dto';

export class UpdateResponsaveisProjetoDto extends PartialType(CreateResponsaveisProjetoDto) {}
