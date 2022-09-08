import { Documento } from "src/client/documento/entities/documento.entity";
import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Usuario } from "src/client/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Envio")
export class Envio {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @PrimaryColumn()
    public idDocumento: number;
    @Column()
    public idUsuario: number;
    @Column()
    public descricao: string;
    @Column()
    public abertura: Date;
    @Column()
    public status: string;
    @Column()
    public envio: Date;

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

    @ManyToOne(() => Projeto, (projeto: Projeto) => projeto.id)
    @JoinColumn({
        name: "idProjeto"    
    })
    public projeto: Projeto;

    @ManyToOne(() => Documento, (documento: Documento) => documento.id)
    @JoinColumn({
        name: "idDocumento"    
    })
    public documento: Documento;
}
