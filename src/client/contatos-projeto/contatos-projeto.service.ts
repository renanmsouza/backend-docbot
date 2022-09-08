import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContatosProjetoDto } from './dto/create-contatos-projeto.dto';
import { UpdateContatosProjetoDto } from './dto/update-contatos-projeto.dto';
import { ContatosProjeto } from './entities/contatos-projeto.entity';

@Injectable()
export class ContatosProjetoService {
  constructor(
    @InjectRepository(ContatosProjeto, "cliente")
    private repository: Repository<ContatosProjeto>
  ){}
  
  create(createContatosProjetoDto: CreateContatosProjetoDto): Promise<ContatosProjeto> {
    const item = this.repository.create(createContatosProjetoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<ContatosProjeto[]> {
    return this.repository.find();
  }

  findOne(empresa: number, projeto: number, contato: number): Promise<ContatosProjeto> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idProjeto: projeto,
        idContato: contato
      }
    });
  }

  // update(id: number, updateContatosProjetoDto: UpdateContatosProjetoDto) {
  //   return `This action updates a #${id} contatosProjeto`;
  // }

  async remove(empresa: number, projeto: number, contato: number): Promise<ContatosProjeto> {
    const item = await this.findOne(empresa, projeto, contato);
    return this.repository.remove(item);
  }
}
