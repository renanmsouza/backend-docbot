import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequisicaoDto } from './dto/create-requisicao.dto';
import { UpdateRequisicaoDto } from './dto/update-requisicao.dto';
import { Requisicao } from './entities/requisicao.entity';

@Injectable()
export class RequisicaoService {
  constructor(
    @InjectRepository(Requisicao, "cliente")
    private repository: Repository<Requisicao>
  ){}
  
  create(createRequisicaoDto: CreateRequisicaoDto): Promise<Requisicao> {
    const item = this.repository.create(createRequisicaoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Requisicao[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Requisicao> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateRequisicaoDto: UpdateRequisicaoDto): Promise<Requisicao> {
    const item = await this.repository.preload({
      id: id,
      ...updateRequisicaoDto,
    });
    if (!item) {
      throw new NotFoundException(`Requisição ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Requisicao> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
