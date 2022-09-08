import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExcecaoResponsavelDto } from './dto/create-excecao-responsavel.dto';
import { UpdateExcecaoResponsavelDto } from './dto/update-excecao-responsavel.dto';
import { ExcecaoResponsavel } from './entities/excecao-responsavel.entity';

@Injectable()
export class ExcecaoResponsavelService {
  constructor(
    @InjectRepository(ExcecaoResponsavel, "cliente")
    private repository: Repository<ExcecaoResponsavel>
  ) { }

  create(createExcecaoResponsavelDto: CreateExcecaoResponsavelDto): Promise<ExcecaoResponsavel> {
    const item = this.repository.create(createExcecaoResponsavelDto);
    return this.repository.save(item);
  }

  findAll(): Promise<ExcecaoResponsavel[]> {
    return this.repository.find();
  }

  findOne(empresa: number, prioridade: number, responsavel: number): Promise<ExcecaoResponsavel> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idPrioridade: prioridade,
        idResponsavel: responsavel
      }
    });
  }

  async update(empresa: number, prioridade: number, responsavel: number,
    updateExcecaoResponsavelDto: UpdateExcecaoResponsavelDto): Promise<ExcecaoResponsavel> {
    const item = await this.repository.preload({
      idEmpresa: empresa,
      idPrioridade: prioridade,
      idResponsavel: responsavel,
      ...updateExcecaoResponsavelDto,
    });
    if (!item) {
      throw new NotFoundException(`Exeção do Responsável não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(empresa: number, prioridade: number, responsavel: number): Promise<ExcecaoResponsavel> {
    const item = await this.findOne(empresa, prioridade, responsavel);
    return this.repository.remove(item);
  }
}
