import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmailResponsavelDto } from './dto/create-email-responsavel.dto';
import { UpdateEmailResponsavelDto } from './dto/update-email-responsavel.dto';
import { EmailResponsavel } from './entities/email-responsavel.entity';

@Injectable()
export class EmailResponsavelService {
  constructor(
    @InjectRepository(EmailResponsavel, "cliente")
    private repository: Repository<EmailResponsavel>
  ){}
  
  create(createEmailResponsavelDto: CreateEmailResponsavelDto): Promise<EmailResponsavel> {
    const item = this.repository.create(createEmailResponsavelDto);
    return this.repository.save(item);
  }

  findAll(): Promise<EmailResponsavel[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<EmailResponsavel> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateEmailResponsavelDto: UpdateEmailResponsavelDto): Promise<EmailResponsavel> {
    const item = await this.repository.preload({
      id: id,
      ...updateEmailResponsavelDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<EmailResponsavel> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
