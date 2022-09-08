import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResponsavelDto } from './dto/create-responsavel.dto';
import { UpdateResponsavelDto } from './dto/update-responsavel.dto';
import { Responsavel } from './entities/responsavel.entity';

@Injectable()
export class ResponsavelService {
  constructor(
    @InjectRepository(Responsavel, "cliente")
    private repository: Repository<Responsavel>
  ) { }

  create(createResponsavelDto: CreateResponsavelDto): Promise<Responsavel> {
    const item = this.repository.create(createResponsavelDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Responsavel[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Responsavel> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateResponsavelDto: UpdateResponsavelDto): Promise<Responsavel> {
    const item = await this.repository.preload({
      id: id,
      ...updateResponsavelDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Responsavel> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
