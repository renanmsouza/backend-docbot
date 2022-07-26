import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParametrosPrioridade } from './parametrosPrioridade.entity';

@Injectable()
export class ParametrosPrioridadeService {
    constructor(
        @InjectRepository(ParametrosPrioridade, 'cliente')
        private parametrosPrioridadeRepository: Repository<ParametrosPrioridade>
    ){}

    public findAll(): Promise<ParametrosPrioridade[]> {
        return this.parametrosPrioridadeRepository.find();
    }

    public findById(idEmpresa: number, idPrioridade: number): Promise<ParametrosPrioridade> {
        return this.parametrosPrioridadeRepository.findOne({
            where: {
                idEmpresa: idEmpresa,
                idPrioridade: idPrioridade
            }
        });
    }

    public save(data: ParametrosPrioridade): Promise<ParametrosPrioridade> {
        return this.parametrosPrioridadeRepository.save(data);
    }
}
