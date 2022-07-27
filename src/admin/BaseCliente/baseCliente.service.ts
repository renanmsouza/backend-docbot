import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BaseCliente } from "./baseCliente.entity";

@Injectable()
export class BaseClienteService {
    constructor(
        @InjectRepository(BaseCliente)
        private baseClienteRepository: Repository<BaseCliente>
    ){}

    public findAll(): Promise<BaseCliente[]> {
        return this.baseClienteRepository.find();
    }

    public findById(cliente: number): Promise<BaseCliente> {
        return this.baseClienteRepository.findOne({
            where: {
                ClienteId: cliente
            }
        });
    }

    public save(data: BaseCliente): Promise<BaseCliente> {
        return this.baseClienteRepository.save(data);
    }
}