import { Module } from '@nestjs/common';
import { ResponsaveisProjetoService } from './responsaveis-projeto.service';
import { ResponsaveisProjetoController } from './responsaveis-projeto.controller';
import { ResponsaveisProjeto } from './entities/responsaveis-projeto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResponsaveisProjeto], 'cliente')],
  controllers: [ResponsaveisProjetoController],
  providers: [ResponsaveisProjetoService]
})
export class ResponsaveisProjetoModule {}
