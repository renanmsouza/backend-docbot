import { PartialType } from '@nestjs/swagger';
import { CreateRequisicaoDto } from './create-requisicao.dto';

export class UpdateRequisicaoDto extends PartialType(CreateRequisicaoDto) {}
