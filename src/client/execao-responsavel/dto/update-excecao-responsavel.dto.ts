import { PartialType } from '@nestjs/swagger';
import { CreateExcecaoResponsavelDto } from './create-excecao-responsavel.dto';

export class UpdateExcecaoResponsavelDto extends PartialType(CreateExcecaoResponsavelDto) {}
