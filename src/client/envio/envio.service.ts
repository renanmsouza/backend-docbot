import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Envio } from './entities/envio.entity';

@Injectable()
export class EnvioService {
  constructor(
    @InjectRepository(Envio, "cliente")
    private repository: Repository<Envio>
  ){}
  
  create(createEnvioDto: CreateEnvioDto): Promise<Envio> {
    const item = this.repository.create(createEnvioDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Envio[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Envio> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateEnvioDto: UpdateEnvioDto): Promise<Envio> {
    const item = await this.repository.preload({
      id: id,
      ...updateEnvioDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Envio> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
