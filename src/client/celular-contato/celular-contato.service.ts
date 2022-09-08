import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCelularContatoDto } from './dto/create-celular-contato.dto';
import { UpdateCelularContatoDto } from './dto/update-celular-contato.dto';
import { CelularContato } from './entities/celular-contato.entity';

@Injectable()
export class CelularContatoService {
  constructor(
    @InjectRepository(CelularContato, "cliente")
    private repository: Repository<CelularContato>
  ){}

  create(createCelularContatoDto: CreateCelularContatoDto): Promise<CelularContato> {
    const item = this.repository.create(createCelularContatoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<CelularContato[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateCelularContatoDto: UpdateCelularContatoDto): Promise<CelularContato> {
    const item = await this.repository.preload({
      id: id,
      ...updateCelularContatoDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<CelularContato> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
