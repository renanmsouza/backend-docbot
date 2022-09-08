import { Module } from '@nestjs/common';
import { ParametrosPrioridadeService } from './parametros-prioridade.service';
import { ParametrosPrioridadeController } from './parametros-prioridade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametrosPrioridade } from './entities/parametros-prioridade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParametrosPrioridade], 'cliente')],
  controllers: [ParametrosPrioridadeController],
  providers: [ParametrosPrioridadeService]
})
export class ParametrosPrioridadeModule {}
