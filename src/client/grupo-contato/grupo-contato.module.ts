import { Module } from '@nestjs/common';
import { GrupoContatoService } from './grupo-contato.service';
import { GrupoContatoController } from './grupo-contato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoContato } from './entities/grupo-contato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoContato], "cliente")],
  controllers: [GrupoContatoController],
  providers: [GrupoContatoService]
})
export class GrupoContatoModule {}
