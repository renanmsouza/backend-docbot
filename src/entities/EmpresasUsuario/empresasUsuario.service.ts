import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EmpresasUsuario } from "./empresasUsuario.entity";

@Injectable()
export class EmpresasUsuarioService {
    constructor(
        @InjectRepository(EmpresasUsuario)
        private empresasUsuarioRepository: Repository<EmpresasUsuario>
    ){}

    public findAll(): Promise<EmpresasUsuario[]> {
        return this.empresasUsuarioRepository.find();
    }

    public findById(empresa: number, usuario: number): Promise<EmpresasUsuario> {
        return this.empresasUsuarioRepository.findOne({
            where: {
                idEmpresa: empresa,
                idUsuario: usuario
            }
        });
    }

    public save(data: EmpresasUsuario): Promise<EmpresasUsuario> {
        return this.empresasUsuarioRepository.save(data);
    }
}