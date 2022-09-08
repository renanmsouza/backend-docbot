import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExcecaoContatoDto } from './dto/create-excecao-contato.dto';
import { UpdateExcecaoContatoDto } from './dto/update-excecao-contato.dto';
import { ExcecaoContato } from './entities/excecao-contato.entity';

@Injectable()
export class ExcecaoContatoService {
  constructor(
    @InjectRepository(ExcecaoContato, "cliente")
    private repository: Repository<ExcecaoContato>
  ) { }

  create(createExcecaoContatoDto: CreateExcecaoContatoDto): Promise<ExcecaoContato> {
    const item = this.repository.create(createExcecaoContatoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<ExcecaoContato[]> {
    return this.repository.find();
  }

  findOne(empresa: number, prioridade: number, contato: number): Promise<ExcecaoContato> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idPrioridade: prioridade,
        idContato: contato
      }
    });
  }

  async update(empresa: number, prioridade: number, contato: number, 
    updateExcecaoContatoDto: UpdateExcecaoContatoDto): Promise<ExcecaoContato> {
    const item = await this.repository.preload({
      idEmpresa: empresa,
      idPrioridade: prioridade,
      idContato: contato,
      ...updateExcecaoContatoDto,
    });
    if (!item) {
      throw new NotFoundException(`Exceção do Contato não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(empresa: number, prioridade: number, contato: number): Promise<ExcecaoContato> {
    const item = await this.findOne(empresa, prioridade, contato);
    return this.repository.remove(item);
  }
}
