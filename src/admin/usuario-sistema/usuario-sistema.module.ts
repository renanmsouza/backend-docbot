import { Module } from '@nestjs/common';
import { UsuarioSistemaService } from './usuario-sistema.service';
import { UsuarioSistemaController } from './usuario-sistema.controller';
import { UsuarioSistema } from './entities/usuario-sistema.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioSistema])],
  controllers: [UsuarioSistemaController],
  providers: [UsuarioSistemaService],
  exports: [UsuarioSistemaService]
})
export class UsuarioSistemaModule {}
