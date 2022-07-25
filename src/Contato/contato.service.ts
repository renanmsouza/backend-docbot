import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contato } from './contato.entity';

@Injectable()
export class ContatoService {
    constructor(
        @InjectRepository(Contato)
        private contatoRepository: Repository<Contato>
    ){}

    public findAll(): Promise<Contato[]> {
        return this.contatoRepository.find();
    }

    public findById(id: number): Promise<Contato> {
        return this.contatoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Contato): Promise<Contato> {
        return this.contatoRepository.save(data);
    }
}