import { Empresa } from "src/empresa/empresa.entity";
import { Prioridade } from "src/Prioridade/prioridade.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("ParametrosPrioridade")
export class ParametrosPrioridade {
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idPrioridade: number;
    @Column()
    public relembrar: boolean;
    @Column()
    public tempoEmail: number;
    @Column()
    public tempoWhats: number;
    @Column()
    public tempoSms: number;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Prioridade, (prioridade: Prioridade) => prioridade.id)
    @JoinColumn({
        name: "idPrioridade"    
    })
    public prioridade: Prioridade;

    constructor(
        idEmpresa: number,
        idPrioridade: number,
        relembrar: boolean,
        tempoEmail: number,
        tempoWhats: number,
        tempoSms: number
    ) {
        this.idEmpresa = idEmpresa
        this.idPrioridade = idPrioridade
        this.relembrar = relembrar
        this.tempoEmail = tempoEmail
        this.tempoWhats = tempoWhats
        this.tempoSms = tempoSms
    }

}