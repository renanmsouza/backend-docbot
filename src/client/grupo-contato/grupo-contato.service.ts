import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGrupoContatoDto } from './dto/create-grupo-contato.dto';
import { UpdateGrupoContatoDto } from './dto/update-grupo-contato.dto';
import { GrupoContato } from './entities/grupo-contato.entity';

@Injectable()
export class GrupoContatoService {
  constructor(
    @InjectRepository(GrupoContato, "cliente")
    private repository: Repository<GrupoContato>
  ){}
  
  create(createGrupoContatoDto: CreateGrupoContatoDto): Promise<GrupoContato> {
    const item = this.repository.create(createGrupoContatoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<GrupoContato[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<GrupoContato> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateGrupoContatoDto: UpdateGrupoContatoDto): Promise<GrupoContato> {
    const item = await this.repository.preload({
      id: id,
      ...updateGrupoContatoDto,
    });
    if (!item) {
      throw new NotFoundException(`Grupo de Contato ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<GrupoContato> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
