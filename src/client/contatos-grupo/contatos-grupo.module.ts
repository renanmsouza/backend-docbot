import { Module } from '@nestjs/common';
import { ContatosGrupoService } from './contatos-grupo.service';
import { ContatosGrupoController } from './contatos-grupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatosGrupo } from './entities/contatos-grupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContatosGrupo], 'cliente')],
  controllers: [ContatosGrupoController],
  providers: [ContatosGrupoService]
})
export class ContatosGrupoModule {}
