import { Module } from '@nestjs/common';
import { ExcecaoGrupoService } from './excecao-grupo.service';
import { ExcecaoGrupoController } from './excecao-grupo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcecaoGrupo } from './entities/excecao-grupo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExcecaoGrupo], 'cliente')],
  controllers: [ExcecaoGrupoController],
  providers: [ExcecaoGrupoService]
})
export class ExcecaoGrupoModule {}
