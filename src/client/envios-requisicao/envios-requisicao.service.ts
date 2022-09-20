import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { env } from 'process';
import { Repository } from 'typeorm';
import { CreateEnviosRequisicaoDto } from './dto/create-envios-requisicao.dto';
import { UpdateEnviosRequisicaoDto } from './dto/update-envios-requisicao.dto';
import { EnviosRequisicao } from './entities/envios-requisicao.entity';

@Injectable()
export class EnviosRequisicaoService {
  constructor(
    @InjectRepository(EnviosRequisicao, "cliente")
    private repository: Repository<EnviosRequisicao>
  ){}
  
  create(createEnviosRequisicaoDto: CreateEnviosRequisicaoDto) {
    const item = this.repository.create(createEnviosRequisicaoDto);
    return this.repository.save(item);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(empresa: number, projeto: number, requisicao: number, envio: number, documento: number) {
    return this.repository.findOne({
      where: {
        idEmpresa: empresa,
        idProjeto: projeto,
        idRequisicao: requisicao,
        idEnvio: envio,
        idDocumento: documento
      }
    });
  }

  // update(id: number, updateEnviosRequisicaoDto: UpdateEnviosRequisicaoDto) {
  //   return `This action updates a #${id} enviosRequisicao`;
  // }

  async remove(empresa: number, projeto: number, requisicao: number, envio: number, documento: number) {
    const item = await this.findOne(empresa, projeto, requisicao, envio, documento);
    return this.repository.remove(item);
  }
}
