import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogMovimentacaoController } from './logMovimentacao.controller';
import { LogMovimentacao } from './logMovimentacao.entity';
import { LogMovimentacaoService } from './logMovimentacao.service';

@Module({
    imports: [TypeOrmModule.forFeature([LogMovimentacao], 'cliente')],
    controllers: [LogMovimentacaoController],
    providers: [LogMovimentacaoService],
})
export class LogMovimentacaoModule {}
