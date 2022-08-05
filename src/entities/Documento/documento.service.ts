import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Documento } from "./documento.entity";

@Injectable()
export class DocumentoService {
    constructor(
        @InjectRepository(Documento)
        private documentoRepository: Repository<Documento>
    ){}

    public findAll(): Promise<Documento[]> {
        return this.documentoRepository.find();
    }

    public findById(id: number): Promise<Documento> {
        return this.documentoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Documento): Promise<Documento> {
        return this.documentoRepository.save(data);
    }
}