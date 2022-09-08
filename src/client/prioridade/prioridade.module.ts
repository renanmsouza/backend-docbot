import { Module } from '@nestjs/common';
import { PrioridadeService } from './prioridade.service';
import { PrioridadeController } from './prioridade.controller';
import { Prioridade } from './entities/prioridade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Prioridade], 'cliente')],
  controllers: [PrioridadeController],
  providers: [PrioridadeService]
})
export class PrioridadeModule {}
