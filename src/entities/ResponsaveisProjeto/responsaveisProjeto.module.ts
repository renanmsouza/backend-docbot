import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponsaveisProjetoController } from './responsaveisProjeto.controller';
import { ResponsaveisProjetoService } from './ResponsaveisProjeto.service';
import { ResponsaveisProjeto } from './responsaviesProjeto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ResponsaveisProjeto])],
    controllers: [ResponsaveisProjetoController],
    providers: [ResponsaveisProjetoService],
})
export class ResponsaveisProjetoModule {}
