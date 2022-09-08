import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';

@Injectable()
export class ContatoService {
  constructor(
    @InjectRepository(Contato, "cliente")
    private repository: Repository<Contato>
  ){}
  
  create(createContatoDto: CreateContatoDto): Promise<Contato> {
    const item = this.repository.create(createContatoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Contato[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Contato> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateContatoDto: UpdateContatoDto): Promise<Contato> {
    const item = await this.repository.preload({
      id: id,
      ...updateContatoDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Contato> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
