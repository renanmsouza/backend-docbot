import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "../Empresa/empresa.entity";

@Entity("Projeto")
export class Projeto {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @Column()
    public criador: number;
    @Column()
    public descricao: string;
    @Column()
    public obs: string;
    @Column()
    public ativo: boolean;
    @Column()
    public dataInicio: Date;
    @Column()
    public dataFim: Date;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    constructor(
        id: number,
        idEmpresa: number,
        criador: number,
        descricao: string,
        obs: string,
        ativo: boolean,
        dataInicio: Date,
        dataFim: Date
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.criador = criador
        this.descricao = descricao
        this.obs = obs
        this.ativo = ativo
        this.dataInicio = dataInicio
        this.dataFim = dataFim
    }

}