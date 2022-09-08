import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa, "cliente")
    private repository: Repository<Empresa>
  ) { }

  create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const item = this.repository.create(createEmpresaDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Empresa[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Empresa> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    const item = await this.repository.preload({
      id: id,
      ...updateEmpresaDto
    });
    if (!item) {
      throw new NotFoundException(`Empresa ${id} não foi encontrada`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Empresa> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
