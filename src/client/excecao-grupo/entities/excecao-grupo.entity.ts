import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { GrupoContato } from "src/client/grupo-contato/entities/grupo-contato.entity";
import { Prioridade } from "src/client/prioridade/entities/prioridade.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("ExcecaoGrupo")
export class ExcecaoGrupo {
    @PrimaryColumn()
    idEmpresa: number; 
    @PrimaryColumn()
    idPrioridade: number;
    @PrimaryColumn()
    idProjeto: number;
    @PrimaryColumn()
    idGrupoContato: number;
    @Column()
    relembrar: boolean;
    @Column()
    tempoEmail: number;
    @Column()
    tempoWhats: number;
    @Column()
    tempoSMS: number;

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

    @ManyToOne(() => Prioridade, (prioridade: Prioridade) => prioridade.id)
    @JoinColumn({
        name: "idPrioridade"
    })
    public prioridade: Prioridade;

    @ManyToOne(() => GrupoContato, (grupoContato: GrupoContato) => grupoContato.id)
    @JoinColumn({
        name: "idGrupoContato"
    })
    public grupoContato: GrupoContato;
}
