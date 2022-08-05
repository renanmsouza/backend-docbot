import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projeto } from './projeto.entity';

@Injectable()
export class ProjetoService {
    constructor(
        @InjectRepository(Projeto)
        private projetoRepository: Repository<Projeto>
    ){}

    public findAll(): Promise<Projeto[]> {
        return this.projetoRepository.find();
    }

    public findById(id: number): Promise<Projeto> {
        return this.projetoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Projeto): Promise<Projeto> {
        return this.projetoRepository.save(data);
    }
}
