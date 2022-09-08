import { Module } from '@nestjs/common';
import { ContatosProjetoService } from './contatos-projeto.service';
import { ContatosProjetoController } from './contatos-projeto.controller';
import { ContatosProjeto } from './entities/contatos-projeto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContatosProjeto], 'cliente')],
  controllers: [ContatosProjetoController],
  providers: [ContatosProjetoService]
})
export class ContatosProjetoModule {}
