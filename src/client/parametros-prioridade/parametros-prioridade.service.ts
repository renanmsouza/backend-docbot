import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParametrosPrioridadeDto } from './dto/create-parametros-prioridade.dto';
import { UpdateParametrosPrioridadeDto } from './dto/update-parametros-prioridade.dto';
import { ParametrosPrioridade } from './entities/parametros-prioridade.entity';

@Injectable()
export class ParametrosPrioridadeService {
  constructor(
    @InjectRepository(ParametrosPrioridade, "cliente")
    private repository: Repository<ParametrosPrioridade>
  ){}
  
  create(createParametrosPrioridadeDto: CreateParametrosPrioridadeDto): Promise<ParametrosPrioridade> {
    const item = this.repository.create(createParametrosPrioridadeDto);
    return this.repository.save(item);
  }

  findAll(): Promise<ParametrosPrioridade[]> {
    return this.repository.find();
  }

  findOne(empresa: number, prioridade: number): Promise<ParametrosPrioridade> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idPrioridade: prioridade
      }
    });
  }

  async update(empresa: number, prioridade: number, updateParametrosPrioridadeDto: UpdateParametrosPrioridadeDto): Promise<ParametrosPrioridade> {
    const item = await this.repository.preload({
      idEmpresa: empresa,
      idPrioridade: prioridade,
      ...updateParametrosPrioridadeDto,
    });
    if (!item) {
      throw new NotFoundException(`Parametro da Prioridade não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(empresa: number, prioridade: number): Promise<ParametrosPrioridade> {
    const item = await this.findOne(empresa, prioridade);
    return this.repository.remove(item);
  }
}
