import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioSistemaDto } from './dto/create-usuario-sistema.dto';
import { UpdateUsuarioSistemaDto } from './dto/update-usuario-sistema.dto';
import { UsuarioSistema } from './entities/usuario-sistema.entity';

@Injectable()
export class UsuarioSistemaService {
  constructor(
    @InjectRepository(UsuarioSistema)
    private repository: Repository<UsuarioSistema>
  ){}
  
  create(createUsuarioSistemaDto: CreateUsuarioSistemaDto): Promise<UsuarioSistema> {
    const item = this.repository.create(createUsuarioSistemaDto);
    return this.repository.save(item);
  }

  findAll(): Promise<UsuarioSistema[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<UsuarioSistema> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateUsuarioSistemaDto: UpdateUsuarioSistemaDto): Promise<UsuarioSistema> {
    const item = await this.repository.preload({
      id: id,
      ...updateUsuarioSistemaDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<UsuarioSistema> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }

  findUsuario(usuario: string): Promise<UsuarioSistema> {
    return this.repository.findOne({
      where: {
        usuario: usuario
      }
    });
  }
}
