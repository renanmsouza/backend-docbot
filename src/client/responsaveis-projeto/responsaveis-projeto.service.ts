import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResponsaveisProjetoDto } from './dto/create-responsaveis-projeto.dto';
import { ResponsaveisProjeto } from './entities/responsaveis-projeto.entity';

@Injectable()
export class ResponsaveisProjetoService {
  constructor(
    @InjectRepository(ResponsaveisProjeto, "cliente")
    private repository: Repository<ResponsaveisProjeto>
  ){}
  
  create(createResponsaveisProjetoDto: CreateResponsaveisProjetoDto): Promise<ResponsaveisProjeto> {
    const item = this.repository.create(createResponsaveisProjetoDto);
    return this.repository.save(item);
  }

  findAll(): Promise<ResponsaveisProjeto[]> {
    return this.repository.find();
  }

  findOne(empresa: number, projeto: number, responsavel: number): Promise<ResponsaveisProjeto> {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idProjeto: projeto,
        idResponsavel: responsavel
      }
    });
  }

  // async update(id: number, updateResponsaveisProjetoDto: UpdateResponsaveisProjetoDto): Promise<ResponsaveisProjeto> {
  //   const item = await this.repository.preload({
  //     ...updateResponsaveisProjetoDto,
  //   });
  //   if (!item) {
  //     throw new NotFoundException(`Cliente ${id} não encontrado`);
  //   }
  //   return this.repository.save(item);
  // }

  async remove(empresa: number, projeto: number, responsavel: number): Promise<ResponsaveisProjeto> {
    const item = await this.findOne(empresa, projeto, responsavel);
    return this.repository.remove(item);
  }
}
