import { Module } from '@nestjs/common';
import { ExcecaoContatoService } from './excecao-contato.service';
import { ExcecaoContatoController } from './excecao-contato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcecaoContato } from './entities/excecao-contato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExcecaoContato], 'cliente')],
  controllers: [ExcecaoContatoController],
  providers: [ExcecaoContatoService]
})
export class ExcecaoContatoModule {}
