import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ResponsaveisProjeto } from "./responsaviesProjeto.entity";

@Injectable()
export class ResponsaveisProjetoService {
    constructor(
        @InjectRepository(ResponsaveisProjeto)
        private responsaveisProjetoRepository: Repository<ResponsaveisProjeto>
    ){}

    public findAll(): Promise<ResponsaveisProjeto[]> {
        return this.responsaveisProjetoRepository.find();
    }

    public findById(empresa: number, projeto: number, responsavel: number): Promise<ResponsaveisProjeto> {
        return this.responsaveisProjetoRepository.findOne({
            where: {
                idEmpresa: empresa,
                idProjeto: projeto,
                idResponsavel: responsavel
            }
        });
    }

    public save(data: ResponsaveisProjeto): Promise<ResponsaveisProjeto> {
        return this.responsaveisProjetoRepository.save(data);
    }
}