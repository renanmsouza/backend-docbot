import { Module } from '@nestjs/common';
import { RequisicaoService } from './requisicao.service';
import { RequisicaoController } from './requisicao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requisicao } from './entities/requisicao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Requisicao], 'cliente')],
  controllers: [RequisicaoController],
  providers: [RequisicaoService]
})
export class RequisicaoModule {}
