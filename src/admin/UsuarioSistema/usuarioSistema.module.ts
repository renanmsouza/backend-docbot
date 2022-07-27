import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioSistemaController } from './usuarioSistema.controller';
import { UsuarioSistema } from './usuarioSistema.entity';
import { UsuarioSistemaService } from './usuarioSistema.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioSistema])],
    controllers: [UsuarioSistemaController],
    providers: [UsuarioSistemaService],
})
export class UsuarioSistemaModule { }
