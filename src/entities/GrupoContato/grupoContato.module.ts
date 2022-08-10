import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoContatoController } from './grupoContato.controller';
import { GrupoContato } from './grupoContato.entity';
import { GrupoContatoService } from './grupoContato.service';

@Module({
    imports: [TypeOrmModule.forFeature([GrupoContato])],
    controllers: [GrupoContatoController],
    providers: [GrupoContatoService],
})
export class GrupoContatoModule { }
