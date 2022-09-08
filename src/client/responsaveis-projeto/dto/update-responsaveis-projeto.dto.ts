import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsaveisProjetoDto } from './create-responsaveis-projeto.dto';

export class UpdateResponsaveisProjetoDto extends PartialType(CreateResponsaveisProjetoDto) {}
