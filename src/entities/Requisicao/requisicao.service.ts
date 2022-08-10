import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Requisicao } from "./requisicao.entity";

@Injectable()
export class RequisicaoService {
    constructor(
        @InjectRepository(Requisicao)
        private requisicaoRepository: Repository<Requisicao>
    ){}

    public findAll(): Promise<Requisicao[]> {
        return this.requisicaoRepository.find();
    }

    public findById(id: number): Promise<Requisicao> {
        return this.requisicaoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Requisicao): Promise<Requisicao> {
        return this.requisicaoRepository.save(data);
    }
}