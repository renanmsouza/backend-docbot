import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private repository: Repository<Cliente>
  ){}
  
  create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const item = this.repository.create(createClienteDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Cliente[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Cliente> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const item = await this.repository.preload({
      id: id,
      ...updateClienteDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Cliente> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
