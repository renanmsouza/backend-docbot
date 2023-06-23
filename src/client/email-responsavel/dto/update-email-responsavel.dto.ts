import { PartialType } from '@nestjs/swagger';
import { CreateEmailResponsavelDto } from './create-email-responsavel.dto';

export class UpdateEmailResponsavelDto extends PartialType(CreateEmailResponsavelDto) {}
