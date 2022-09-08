import { Module } from '@nestjs/common';
import { EmpresasUsuarioService } from './empresas-usuario.service';
import { EmpresasUsuarioController } from './empresas-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasUsuario } from './entities/empresas-usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresasUsuario], 'cliente')],
  controllers: [EmpresasUsuarioController],
  providers: [EmpresasUsuarioService]
})
export class EmpresasUsuarioModule {}
