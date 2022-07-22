import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService { 
    constructor(
        @InjectRepository(Empresa)
        private empresaRepository: Repository<Empresa>
    ){}

    public findAll(): Promise<Empresa[]> {
        return this.empresaRepository.find();
    }

    public findById(id: number): Promise<Empresa> {
        return this.empresaRepository.findOne({where: {
            id: id
        }});
    }

    public save(data: Empresa): Promise<Empresa> {
        return this.empresaRepository.save(data);
    }
}
