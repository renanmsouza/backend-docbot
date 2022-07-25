import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LogMovimentacao } from "./logMovimentacao.entity";

@Injectable()
export class LogMovimentacaoService {
    constructor(
        @InjectRepository(LogMovimentacao)
        private logMovimentacaoService: Repository<LogMovimentacao>
    ){}

    public findAll(): Promise<LogMovimentacao[]> {
        return this.logMovimentacaoService.find();
    }

    public findById(id: number): Promise<LogMovimentacao> {
        return this.logMovimentacaoService.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: LogMovimentacao): Promise<LogMovimentacao> {
        return this.logMovimentacaoService.save(data);
    }
}