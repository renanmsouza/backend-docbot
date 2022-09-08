import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBaseClienteDto } from './dto/create-base-cliente.dto';
import { UpdateBaseClienteDto } from './dto/update-base-cliente.dto';
import { BaseCliente } from './entities/base-cliente.entity';

@Injectable()
export class BaseClienteService {
  constructor(
    @InjectRepository(BaseCliente)
    private repository: Repository<BaseCliente>
  ) { }

  create(createBaseClienteDto: CreateBaseClienteDto): Promise<BaseCliente> {
    const item = this.repository.create(createBaseClienteDto);
    return this.repository.save(item);
  }

  findAll(): Promise<BaseCliente[]> {
    return this.repository.find();
  }

  findOne(clienteId: number): Promise<BaseCliente> {
    return this.repository.findOne({
      where: {
        ClienteId: clienteId
      }
    });
  }

  async update(clienteId: number, updateBaseClienteDto: UpdateBaseClienteDto): Promise<BaseCliente> {
    const item = await this.repository.preload({
      ClienteId: clienteId,
      ...updateBaseClienteDto,
    });
    if (!item) {
      throw new NotFoundException(`Base do Cliente ${clienteId} não encontrada`);
    }
    return this.repository.save(item);
  }

  async remove(clienteId: number): Promise<BaseCliente> {
    const item = await this.findOne(clienteId);
    return this.repository.remove(item);
  }
}
