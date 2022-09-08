import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';
import { Contato } from './entities/contato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Contato], 'cliente')],
  controllers: [ContatoController],
  providers: [ContatoService]
})
export class ContatoModule {}
