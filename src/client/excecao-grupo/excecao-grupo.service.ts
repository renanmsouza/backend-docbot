import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExcecaoGrupoDto } from './dto/create-excecao-grupo.dto';
import { UpdateExcecaoGrupoDto } from './dto/update-excecao-grupo.dto';
import { ExcecaoGrupo } from './entities/excecao-grupo.entity';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class ExcecaoGrupoService {
  constructor(
    @InjectRepository(ExcecaoGrupo, "cliente")
    private repository: Repository<ExcecaoGrupo>
  ) { }

  create(createExcecaoGrupoDto: CreateExcecaoGrupoDto) {
    const item = this.repository.create(createExcecaoGrupoDto);
    return this.repository.save(item);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(empresa: number, prioridade: number, projeto: number, grupoContato: number) {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idPrioridade: prioridade,
        idProjeto: projeto,
        idGrupoContato: grupoContato
      }
    });
  }

  async update(empresa: number, prioridade: number, projeto: number, grupoContato: number, updateExcecaoGrupoDto: UpdateExcecaoGrupoDto) {
    const item = await this.repository.preload({
      idEmpresa: empresa,
      idPrioridade: prioridade,
      idProjeto: projeto,
      idGrupoContato: grupoContato,
      ...updateExcecaoGrupoDto,
    });
    if (!item) {
      throw new NotFoundException(`Exceção de Grupo não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(empresa: number, prioridade: number, projeto: number, grupoContato: number) {
    const item = await this.findOne(empresa, prioridade, projeto, grupoContato);
    return this.repository.remove(item);
  }
}
