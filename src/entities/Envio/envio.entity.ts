import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Documento } from "../Documento/documento.entity";
import { Empresa } from "../Empresa/empresa.entity";
import { Projeto } from "../Projeto/projeto.entity";
import { Usuario } from "../Usuario/usuario.entity";

@Entity("Envio")
export class Envio {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idUsuario: number;
    @PrimaryColumn()
    public idProjeto: number;
    @PrimaryColumn()
    public idDocumento: number;
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

    constructor(
        id: number,
        idEmpresa: number,
        idUsuario: number,
        idProjeto: number,
        idDocumento: number,
        descricao: string,
        abertura: Date,
        status: string,
        envio: Date
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idUsuario = idUsuario
        this.idProjeto = idProjeto
        this.idDocumento = idDocumento
        this.descricao = descricao
        this.abertura = abertura
        this.status = status
        this.envio = envio
    }

}