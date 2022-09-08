import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailContatoDto } from './dto/create-email-contato.dto';
import { UpdateEmailContatoDto } from './dto/update-email-contato.dto';
import { EmailContato } from './entities/email-contato.entity';

@Injectable()
export class EmailContatoService {
  constructor(
    @InjectRepository(EmailContato, "cliente")
    private repository: Repository<EmailContato>
  ){}

  create(createEmailContatoDto: CreateEmailContatoDto): Promise<EmailContato> {
    const item = this.repository.create(createEmailContatoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<EmailContato[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<EmailContato> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateEmailContatoDto: UpdateEmailContatoDto): Promise<EmailContato> {
    const item = await this.repository.preload({
      id: id,
      ...updateEmailContatoDto,
    });
    if (!item) {
      throw new NotFoundException(`Email do Contato ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<EmailContato> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
