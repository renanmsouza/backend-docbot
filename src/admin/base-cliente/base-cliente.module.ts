import { Module } from '@nestjs/common';
import { BaseClienteService } from './base-cliente.service';
import { BaseClienteController } from './base-cliente.controller';
import { BaseCliente } from './entities/base-cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BaseCliente])],
  controllers: [BaseClienteController],
  providers: [BaseClienteService]
})
export class BaseClienteModule {}
