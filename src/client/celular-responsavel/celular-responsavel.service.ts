import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCelularResponsavelDto } from './dto/create-celular-responsavel.dto';
import { UpdateCelularResponsavelDto } from './dto/update-celular-responsavel.dto';
import { CelularResponsavel } from './entities/celular-responsavel.entity';

@Injectable()
export class CelularResponsavelService {
  constructor(
    @InjectRepository(CelularResponsavel, "cliente")
    private repository: Repository<CelularResponsavel>
  ){}

  create(createCelularResponsavelDto: CreateCelularResponsavelDto): Promise<CelularResponsavel> {
    const item = this.repository.create(createCelularResponsavelDto);
    return this.repository.save(item);
  }

  findAll(): Promise<CelularResponsavel[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<CelularResponsavel> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateCelularResponsavelDto: UpdateCelularResponsavelDto): Promise<CelularResponsavel> {
    const item = await this.repository.preload({
      id: id,
      ...updateCelularResponsavelDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<CelularResponsavel> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
