import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularContato } from './celularContato.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CelularContato])],
    controllers: [],
    providers: [],
})
export class CelularContatoModule { }
