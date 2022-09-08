import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { Documento } from './entities/documento.entity';

@Injectable()
export class DocumentoService {
  constructor(
    @InjectRepository(Documento, "cliente")
    private repository: Repository<Documento>
  ){}
  
  create(createDocumentoDto: CreateDocumentoDto): Promise<Documento> {
    const item = this.repository.create(createDocumentoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Documento[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Documento> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento> {
    const item = await this.repository.preload({
      id: id,
      ...updateDocumentoDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Documento> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
