import { PartialType } from '@nestjs/mapped-types';
import { CreateRequisicaoDto } from './create-requisicao.dto';

export class UpdateRequisicaoDto extends PartialType(CreateRequisicaoDto) {}
