import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Usuario } from "src/client/usuario/entities/usuario.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("EmpresasUsuario")
export class EmpresasUsuario {
    @PrimaryColumn()
    idUsuario: number;
    @PrimaryColumn()
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
}