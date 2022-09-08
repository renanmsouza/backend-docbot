import { Contato } from "src/client/contato/entities/contato.entity";
import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("ContatosProjeto")
export class ContatosProjeto {
    @PrimaryColumn()
    public idEmpresa: number; 
    @PrimaryColumn()
    public idProjeto: number;
    @PrimaryColumn()
    public idContato: number;

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

    @ManyToOne(() => Contato, (contato: Contato) => contato.id)
    @JoinColumn({
        name: "idContato"
    })
    public contato: Contato;
}
