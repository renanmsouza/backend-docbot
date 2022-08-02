import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { encodeString } from "src/utils/bcrypt";
import { Repository } from "typeorm";
import { UsuarioSistema } from "./usuarioSistema.entity";

@Injectable()
export class UsuarioSistemaService {
    constructor(
        @InjectRepository(UsuarioSistema)
        private usuarioSistemarepository: Repository<UsuarioSistema>
    ){}

    public findAll(): Promise<UsuarioSistema[]> {
        return this.usuarioSistemarepository.find();
    }

    public findById(id: number): Promise<UsuarioSistema> {
        return this.usuarioSistemarepository.findOne({
            where: {
                id: id
            }
        });
    }

    public save(data: UsuarioSistema): Promise<UsuarioSistema> {
        const senha = encodeString(data.senha);
        return this.usuarioSistemarepository.save({...data, senha});
    }

    public findByUsuario(usuario: string): Promise<UsuarioSistema> {
        return this.usuarioSistemarepository.findOne({
            where: {
                usuario: usuario
            }
        })
    }
}