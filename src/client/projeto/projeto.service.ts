import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';

@Injectable()
export class ProjetoService {
  constructor(
    @InjectRepository(Projeto, "cliente")
    private repository: Repository<Projeto>
  ){}

  create(createProjetoDto: CreateProjetoDto): Promise<Projeto> {
    const item = this.repository.create(createProjetoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Projeto[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Projeto> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateProjetoDto: UpdateProjetoDto): Promise<Projeto> {
    const item = await this.repository.preload({
      id: id,
      ...UpdateProjetoDto
    });
    if (!item) {
      throw new NotFoundException(`Projeto ${id} não encontrado!`)
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Projeto> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
