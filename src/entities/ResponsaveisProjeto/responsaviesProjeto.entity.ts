import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Empresa } from "../Empresa/empresa.entity";
import { Projeto } from "../Projeto/projeto.entity";
import { Responsavel } from "../Responsavel/responsavel.entity";

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

    constructor(idEmpresa: number, idProjeto: number, idResponsavel: number) {
        this.idEmpresa = idEmpresa
        this.idProjeto = idProjeto
        this.idResponsavel = idResponsavel
    }



}