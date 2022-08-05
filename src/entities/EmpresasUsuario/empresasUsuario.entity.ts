import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Empresa } from "../Empresa/empresa.entity";
import { Usuario } from "../Usuario/usuario.entity";

@Entity("EmpresasUsuario")
export class EmpresasUsuario {
    idUsuario: number;
    idEmpresa: number;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.id)
    @JoinColumn({
        name: "idUsuario"    
    })
    public usuario: Usuario;

    constructor(idUsuario: number, idEmpresa: number) {
        this.idUsuario = idUsuario
        this.idEmpresa = idEmpresa
    }

}