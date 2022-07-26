import { Contato } from "src/entities/Contato/contato.entity";
import { Empresa } from "src/entities/Empresa/empresa.entity";
import { Prioridade } from "src/entities/Prioridade/prioridade.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("ExcecaoContato")
export class ExcecaoContato {
    @PrimaryColumn()
    public idPrioridade: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idContato: number;
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

    @ManyToOne(() => Contato, (contato: Contato) => contato.id)
    @JoinColumn({
        name: "idContato"
    })
    public contato: Contato;

    constructor(
        idPrioridade: number,
        idEmpresa: number,
        idContato: number,
        relembrar: boolean,
        tempoEmail: number,
        tempoWhats: number,
        tempoSms: number
    ) {
        this.idPrioridade = idPrioridade
        this.idEmpresa = idEmpresa
        this.idContato = idContato
        this.relembrar = relembrar
        this.tempoEmail = tempoEmail
        this.tempoWhats = tempoWhats
        this.tempoSms = tempoSms
    }

}