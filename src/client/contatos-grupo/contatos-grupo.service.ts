import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContatosGrupoDto } from './dto/create-contatos-grupo.dto';
import { UpdateContatosGrupoDto } from './dto/update-contatos-grupo.dto';
import { ContatosGrupo } from './entities/contatos-grupo.entity';

@Injectable()
export class ContatosGrupoService {
  constructor(
    @InjectRepository(ContatosGrupo, "cliente")
    private repository: Repository<ContatosGrupo>
  ){}
  
  create(createContatosGrupoDto: CreateContatosGrupoDto): Promise<ContatosGrupo> {
    const item = this.repository.create(createContatosGrupoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<ContatosGrupo[]> {
    return this.repository.find();
  }

  findOne(empresa: number, projeto: number, grupoContato: number, contato: number): Promise<ContatosGrupo> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idProjeto: projeto,
        idGrupoContato: grupoContato,
        idContato: contato,
      }
    });
  }

  // update(id: number, updateContatosGrupoDto: UpdateContatosGrupoDto) {
  //   return `This action updates a #${id} contatosGrupo`;
  // }

  async remove(empresa: number, projeto: number, grupoContato: number, contato: number): Promise<ContatosGrupo> {
    const item = await this.findOne(empresa, projeto, grupoContato,contato);
    return this.repository.remove(item);
  }
}
