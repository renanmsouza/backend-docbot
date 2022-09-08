import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrioridadeDto } from './dto/create-prioridade.dto';
import { UpdatePrioridadeDto } from './dto/update-prioridade.dto';
import { Prioridade } from './entities/prioridade.entity';

@Injectable()
export class PrioridadeService {
  constructor(
    @InjectRepository(Prioridade, "cliente")
    private repository: Repository<Prioridade>
  ){}
  
  create(createPrioridadeDto: CreatePrioridadeDto): Promise<Prioridade> {
    const item = this.repository.create(createPrioridadeDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Prioridade[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Prioridade> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updatePrioridadeDto: UpdatePrioridadeDto): Promise<Prioridade> {
    const item = await this.repository.preload({
      id: id,
      ...updatePrioridadeDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Prioridade> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
