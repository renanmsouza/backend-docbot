import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ExcecaoContato } from "./excecaoContato.entity";

@Injectable()
export class ExcecaoContatoService {
    constructor(
        @InjectRepository(ExcecaoContato)
        private excecaoContatoRepository: Repository<ExcecaoContato>
    ){}

    public findAll(): Promise<ExcecaoContato[]> {
        return this.excecaoContatoRepository.find();
    }

    public findById(empresa: number, prioridade: number, contato: number): Promise<ExcecaoContato> {
        return this.excecaoContatoRepository.findOne({
            where: {
                idEmpresa: empresa,
                idPrioridade: prioridade,
                idContato: contato
            }
        });
    }

    public save(data: ExcecaoContato): Promise<ExcecaoContato> {
        return this.excecaoContatoRepository.save(data);
    } 
}