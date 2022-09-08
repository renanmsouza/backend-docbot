import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailResponsavelDto } from './create-email-responsavel.dto';

export class UpdateEmailResponsavelDto extends PartialType(CreateEmailResponsavelDto) {}
