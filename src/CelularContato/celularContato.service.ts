import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CelularContato } from "./celularContato.entity";

@Injectable()
export class CelularContatoService {
    constructor(
        @InjectRepository(CelularContato)
        private celularContatoRepository: Repository<CelularContato>
    ){}

    public findAll(): Promise<CelularContato[]> {
        return this.celularContatoRepository.find();
    }

    public findById(id: number): Promise<CelularContato> {
        return this.celularContatoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: CelularContato): Promise<CelularContato> {
        return this.celularContatoRepository.save(data);
    }
}