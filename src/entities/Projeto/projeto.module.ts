import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjetoController } from './projeto.controller';
import { Projeto } from './projeto.entity';
import { ProjetoService } from './projeto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Projeto])],
    controllers: [ProjetoController],
    providers: [ProjetoService],
})
export class ProjetoModule { }
