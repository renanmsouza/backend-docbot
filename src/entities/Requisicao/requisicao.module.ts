import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequisicaoController } from './requisicao.controller';
import { Requisicao } from './requisicao.entity';
import { RequisicaoService } from './requisicao.service';

@Module({
    imports: [TypeOrmModule.forFeature([Requisicao])],
    controllers: [RequisicaoController],
    providers: [RequisicaoService],
})
export class RequisicaoModule { }
