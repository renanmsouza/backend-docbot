import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "../Empresa/empresa.entity";
import { Projeto } from "../Projeto/projeto.entity";
import { Usuario } from "../Usuario/usuario.entity";

@Entity("Documento")
export class Documento {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @Column()
    public enviadoPor: number;
    @Column()
    public descricao: string;
    @Column()
    public arquivo: string;
    @Column()
    public versao: number;
    @Column()
    public local: string;
    @Column()
    public upload: Date;
    @Column()
    public status: string;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Projeto, (projeto: Projeto) => projeto.id)
    @JoinColumn({
        name: "idProjeto"    
    })
    public projeto: Projeto;

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.id)
    @JoinColumn({
        name: "enviadoPor"    
    })
    public usuario: Usuario;

    constructor(
        id: number,
        idEmpresa: number,
        idProjeto: number,
        enviadoPor: number,
        descricao: string,
        arquivo: string,
        versao: number,
        local: string,
        upload: Date,
        status: string
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idProjeto = idProjeto
        this.enviadoPor = enviadoPor
        this.descricao = descricao
        this.arquivo = arquivo
        this.versao = versao
        this.local = local
        this.upload = upload
        this.status = status
    }

}