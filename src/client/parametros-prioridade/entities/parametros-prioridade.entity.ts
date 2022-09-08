import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Prioridade } from "src/client/prioridade/entities/prioridade.entity";
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
}
