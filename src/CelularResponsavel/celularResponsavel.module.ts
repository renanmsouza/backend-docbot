import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularResponsavel } from './celularResponsavel.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CelularResponsavel])],
    controllers: [],
    providers: [],
})
export class CelularResponsavelModule { }
