import { Module } from '@nestjs/common';
import { EnviosRequisicaoService } from './envios-requisicao.service';
import { EnviosRequisicaoController } from './envios-requisicao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviosRequisicao } from './entities/envios-requisicao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EnviosRequisicao], 'cliente')],
  controllers: [EnviosRequisicaoController],
  providers: [EnviosRequisicaoService]
})
export class EnviosRequisicaoModule {}
