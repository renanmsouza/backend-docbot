import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prioridade } from './prioridade.entity';

@Injectable()
export class PrioridadeService {
    constructor(
        @InjectRepository(Prioridade, 'cliente')
        private prioridadeRepository: Repository<Prioridade>
    ){}

    public findAll(): Promise<Prioridade[]> {
        return this.prioridadeRepository.find();
    }

    public findById(id: number): Promise<Prioridade> {
        return this.prioridadeRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Prioridade): Promise<Prioridade> {
        return this.prioridadeRepository.save(data);
    }
}
