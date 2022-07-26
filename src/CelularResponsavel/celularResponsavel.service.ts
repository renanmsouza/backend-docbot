import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CelularResponsavel } from "./celularResponsavel.entity";

@Injectable()
export class CelularResponsavelService {
    constructor(
        @InjectRepository(CelularResponsavel)
        private CelularResponsavelRepository: Repository<CelularResponsavel>
    ){}

    public findAll(): Promise<CelularResponsavel[]> {
        return this.CelularResponsavelRepository.find();
    }

    public findById(id: number): Promise<CelularResponsavel> {
        return this.CelularResponsavelRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: CelularResponsavel): Promise<CelularResponsavel> {
        return this.CelularResponsavelRepository.save(data);
    }
}