import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresasUsuarioDto } from './dto/create-empresas-usuario.dto';
import { EmpresasUsuario } from './entities/empresas-usuario.entity';

@Injectable()
export class EmpresasUsuarioService {
  constructor(
    @InjectRepository(EmpresasUsuario, "cliente")
    private repository: Repository<EmpresasUsuario>
  ){}
  
  create(createEmpresasUsuarioDto: CreateEmpresasUsuarioDto): Promise<EmpresasUsuario> {
    const item = this.repository.create(createEmpresasUsuarioDto);
    return this.repository.save(item);
  }

  findAll(): Promise<EmpresasUsuario[]> {
    return this.repository.find();
  }

  findOne(empresa: number, usuario: number): Promise<EmpresasUsuario> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idUsuario: usuario
      }
    });
  }

  // update(id: number, updateEmpresasUsuarioDto: UpdateEmpresasUsuarioDto) {
  //   return `This action updates a #${id} empresasUsuario`;
  // }

  async remove(empresa: number, usuario: number): Promise<EmpresasUsuario> {
    const item = await this.findOne(empresa, usuario);
    return this.repository.remove(item);
  }
}
