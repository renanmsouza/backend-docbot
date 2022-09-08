import { PartialType } from '@nestjs/mapped-types';
import { CreateExcecaoResponsavelDto } from './create-excecao-responsavel.dto';

export class UpdateExcecaoResponsavelDto extends PartialType(CreateExcecaoResponsavelDto) {}
