import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseCliente } from './baseCliente.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BaseCliente])],
    controllers: [],
    providers: [],
})
export class BaseClienteModule {}
