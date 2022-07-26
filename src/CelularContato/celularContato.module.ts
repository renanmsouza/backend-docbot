import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularContatoController } from './celularContato.controller';
import { CelularContato } from './celularContato.entity';
import { CelularContatoService } from './celularContato.service';

@Module({
    imports: [TypeOrmModule.forFeature([CelularContato])],
    controllers: [CelularContatoController],
    providers: [CelularContatoService],
})
export class CelularContatoModule { }
