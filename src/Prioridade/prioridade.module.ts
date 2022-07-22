import { PrioridadeController } from './prioridade.controller';
import { PrioridadeService } from './prioridade.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prioridade } from './prioridade.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Prioridade])],
    controllers: [
        PrioridadeController,],
    providers: [
        PrioridadeService,],
})
export class PrioridadeModule { }
