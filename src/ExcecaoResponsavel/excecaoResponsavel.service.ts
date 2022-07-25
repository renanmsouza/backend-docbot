import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExcecaoResponsavel } from './excecaoResponsavel.entity';

@Injectable()
export class ExcecaoResponsavelService { 
    constructor(
        @InjectRepository(ExcecaoResponsavel)
        private excecaoResponsavelRepository: Repository<ExcecaoResponsavel>
    ){}

    public findAll(): Promise<ExcecaoResponsavel[]> {
        return this.excecaoResponsavelRepository.find();
    }

    public findById(empresa: number, prioridade: number, responsavel: number): Promise<ExcecaoResponsavel> {
        return this.excecaoResponsavelRepository.findOne({
            where: {
                idEmpresa: empresa,
                idPrioridade: prioridade,
                idResponsavel: responsavel
            }
        });
    }

    public save(data: ExcecaoResponsavel): Promise<ExcecaoResponsavel> {
        return this.excecaoResponsavelRepository.save(data);
    }
}
