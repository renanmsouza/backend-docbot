import { PartialType } from '@nestjs/swagger';
import { CreateEmailContatoDto } from './create-email-contato.dto';

export class UpdateEmailContatoDto extends PartialType(CreateEmailContatoDto) {}
