import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClienteService { 
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>
    ){}

    public findAll(): Promise<Cliente[]> {
        return this.clienteRepository.find();
    }

    public findById(id: number): Promise<Cliente> {
        return this.clienteRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Cliente): Promise<Cliente> {
        return this.clienteRepository.save(data);
    }
}
