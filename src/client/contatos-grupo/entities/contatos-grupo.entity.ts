import { Contato } from "src/client/contato/entities/contato.entity";
import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { GrupoContato } from "src/client/grupo-contato/entities/grupo-contato.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("ContatosGrupo")
export class ContatosGrupo {
    @PrimaryColumn()
    idProjeto: number; 
    @PrimaryColumn()
    idEmpresa: number;
    @PrimaryColumn()
    idGrupoContato: number;
    @PrimaryColumn()
    idContato: number;

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

    @ManyToOne(() => GrupoContato, (grupoContato: GrupoContato) => grupoContato.id)
    @JoinColumn({
        name: "idGrupoContato"
    })
    public grupoContato: GrupoContato;
}
