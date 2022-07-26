import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LogSistema } from "./logSistema.entity";

@Injectable()
export class LogSistemaService {
    constructor(
        @InjectRepository(LogSistema, 'cliente')
        private logSistemaRepository: Repository<LogSistema>
    ){}

    public findAll(): Promise<LogSistema[]> {
        return this.logSistemaRepository.find();
    }

    public findById(id: number): Promise<LogSistema> {
        return this.logSistemaRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: LogSistema): Promise<LogSistema> {
        return this.logSistemaRepository.save(data);
    }
}