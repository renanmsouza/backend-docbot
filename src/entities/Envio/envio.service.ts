import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Envio } from "./envio.entity";

@Injectable()
export class EnvioService {
    constructor(
        @InjectRepository(Envio)
        private envioRepository: Repository<Envio>
    ){}

    public findAll(): Promise<Envio[]> {
        return this.envioRepository.find();
    }

    public findById(id: number): Promise<Envio> {
        return this.envioRepository.findOne({where: {
            id: id
        }});
    }

    public save(data: Envio): Promise<Envio> {
        return this.envioRepository.save(data);
    }
}