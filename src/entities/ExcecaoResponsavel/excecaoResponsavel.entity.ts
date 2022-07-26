import { Empresa } from "src/entities/Empresa/empresa.entity";
import { Prioridade } from "src/entities/Prioridade/prioridade.entity";
import { Responsavel } from "src/entities/Responsavel/responsavel.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"

@Entity("ExcecaoResponsavel")
export class ExcecaoResponsavel {
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idPrioridade: number;
    @PrimaryColumn()
    public idResponsavel: number;
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

    @ManyToOne(() => Responsavel, (responsavel: Responsavel) => responsavel.id)
    @JoinColumn({
        name: "idResponsavel"
    })
    public responsavel: Responsavel;


    constructor(
        idEmpresa: number,
        idPrioridade: number,
        idResponsavel: number,
        relembrar: boolean,
        tempoEmail: number,
        tempoWhats: number,
        tempoSms: number
    ) {
        this.idEmpresa = idEmpresa
        this.idPrioridade = idPrioridade
        this.idResponsavel = idResponsavel
        this.relembrar = relembrar
        this.tempoEmail = tempoEmail
        this.tempoWhats = tempoWhats
        this.tempoSms = tempoSms
    }

}