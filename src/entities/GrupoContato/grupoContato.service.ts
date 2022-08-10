import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GrupoContato } from "./grupoContato.entity";

@Injectable()
export class GrupoContatoService {
    constructor(
        @InjectRepository(GrupoContato)
        private grupoContatoRepository: Repository<GrupoContato>
    ){}

    public findAll(): Promise<GrupoContato[]> {
        return this.grupoContatoRepository.find();
    }

    public findById(id: number): Promise<GrupoContato> {
        return this.grupoContatoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: GrupoContato): Promise<GrupoContato> {
        return this.grupoContatoRepository.save(data);
    }
}