import { PartialType } from '@nestjs/mapped-types';
import { CreateEmailContatoDto } from './create-email-contato.dto';

export class UpdateEmailContatoDto extends PartialType(CreateEmailContatoDto) {}
