import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmailResponsavel } from "./emailResponsavel.entity";

@Injectable()
export class EmailResponsavelService {
    constructor(
        @InjectRepository(EmailResponsavel)
        private emailResponsavelRepository: Repository<EmailResponsavel>
    ){}

    public findAll(): Promise<EmailResponsavel[]> {
        return this.emailResponsavelRepository.find();
    }

    public findById(id: number): Promise<EmailResponsavel> {
        return this.emailResponsavelRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: EmailResponsavel): Promise<EmailResponsavel> {
        return this.emailResponsavelRepository.save(data);
    }
}