import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "../Empresa/empresa.entity";
import { Projeto } from "../Projeto/projeto.entity";

@Entity("GrupoContato")
export class GrupoContato {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @Column()
    public descricao: string;
    @Column()
    public obs: string;

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

    constructor(
        id: number,
        idEmpresa: number,
        idProjeto: number,
        descricao: string,
        obs: string
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idProjeto = idProjeto
        this.descricao = descricao
        this.obs = obs
    }

}