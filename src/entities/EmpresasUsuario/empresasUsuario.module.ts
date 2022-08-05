import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasUsuarioController } from './empresasUsuario.controller';
import { EmpresasUsuario } from './empresasUsuario.entity';
import { EmpresasUsuarioService } from './empresasUsuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([EmpresasUsuario])],
    controllers: [EmpresasUsuarioController],
    providers: [EmpresasUsuarioService],
})
export class EmpresasUsuarioModule { }
