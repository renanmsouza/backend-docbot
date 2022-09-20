import { PartialType } from '@nestjs/swagger';
import { CreateEnviosRequisicaoDto } from './create-envios-requisicao.dto';

export class UpdateEnviosRequisicaoDto extends PartialType(CreateEnviosRequisicaoDto) {}
