import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "../Empresa/empresa.entity";
import { Projeto } from "../Projeto/projeto.entity";
import { Usuario } from "../Usuario/usuario.entity";

@Entity("Requisicao")
export class Requisicao {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @PrimaryColumn()
    public idUsuario: number;
    @Column()
    public idPrioridade: number;
    @Column()
    public descricao: string;
    @Column()
    public dataCriacao: Date;
    @Column()
    public dataFechamento: Date;
    @Column()
    public status: string;
    @Column()
    public dataVencimento: Date;
    @Column()
    public ultimoLembrete: Date;

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
        name: "idUsuario"    
    })
    public usuario: Usuario;

    constructor(
        id: number,
        idEmpresa: number,
        idProjeto: number,
        idUsuario: number,
        idPrioridade: number,
        descricao: string,
        dataCriacao: Date,
        dataFechamento: Date,
        status: string,
        dataVencimento: Date,
        ultimoLembrete: Date
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idProjeto = idProjeto
        this.idUsuario = idUsuario
        this.idPrioridade = idPrioridade
        this.descricao = descricao
        this.dataCriacao = dataCriacao
        this.dataFechamento = dataFechamento
        this.status = status
        this.dataVencimento = dataVencimento
        this.ultimoLembrete = ultimoLembrete
    }

}