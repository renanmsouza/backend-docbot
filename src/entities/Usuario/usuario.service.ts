import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario, 'cliente')
        private usuarioRepository: Repository<Usuario>
    ){}

    public findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    public findById(id: number): Promise<Usuario> {
        return this.usuarioRepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: Usuario): Promise<Usuario> {
        return this.usuarioRepository.save(data);
    }
}
