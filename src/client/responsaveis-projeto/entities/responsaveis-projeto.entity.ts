import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Responsavel } from "src/client/responsavel/entities/responsavel.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("ResponsaveisProjeto")
export class ResponsaveisProjeto {
    @PrimaryColumn()
    idEmpresa: number;
    @PrimaryColumn()
    idProjeto: number;
    @PrimaryColumn()
    idResponsavel: number;

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

    @ManyToOne(() => Responsavel, (responsavel: Responsavel) => responsavel.id)
    @JoinColumn({
        name: "idResponsavel"    
    })
    public responsavel: Responsavel;
}
