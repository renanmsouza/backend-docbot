import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Responsavel } from './responsavel.entity';

@Injectable()
export class ResponsavelService {
    constructor(
        @InjectRepository(Responsavel)
        private responsavelRepository: Repository<Responsavel>
    ){}

    public findAll(): Promise<Responsavel[]> {
        return this.responsavelRepository.find();
    }

    public findById(id: number): Promise<Responsavel> {
        return this.responsavelRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Responsavel): Promise<Responsavel> {
        return this.responsavelRepository.save(data);
    }
}
