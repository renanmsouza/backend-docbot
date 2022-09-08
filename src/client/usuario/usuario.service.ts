import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario, "cliente")
    private repository: Repository<Usuario>
  ){}
  
  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const item = this.repository.create(createUsuarioDto);
    return this.repository.save(item);
  }

  findAll(): Promise<Usuario[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const item = await this.repository.preload({
      id: id,
      ...updateUsuarioDto,
    });
    if (!item) {
      throw new NotFoundException(`Cliente ${id} não encontrado`);
    }
    return this.repository.save(item);
  }

  async remove(id: number): Promise<Usuario> {
    const item = await this.findOne(id);
    return this.repository.remove(item);
  }
}
