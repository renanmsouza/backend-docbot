import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametrosPrioridadeController } from './parametrosPrioridade.controller';
import { ParametrosPrioridade } from './parametrosPrioridade.entity';
import { ParametrosPrioridadeService } from './parametrosprioridade.service';

@Module({
    imports: [TypeOrmModule.forFeature([ParametrosPrioridade], 'cliente')],
    controllers: [ParametrosPrioridadeController],
    providers: [ParametrosPrioridadeService],
})
export class ParametrosPrioridadeModule { }
