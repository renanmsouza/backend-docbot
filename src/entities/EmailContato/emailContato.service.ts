import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailContato } from './emailContato.entity';

@Injectable()
export class EmailContatoService { 
    constructor(
        @InjectRepository(EmailContato, 'cliente')
        private emailContatoRepository: Repository<EmailContato>
    ){}

    public findAll(): Promise<EmailContato[]> {
        return this.emailContatoRepository.find();
    }

    public findById(id: number): Promise<EmailContato> {
        return this.emailContatoRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: EmailContato): Promise<EmailContato> {
        return this.emailContatoRepository.save(data);
    }
}
