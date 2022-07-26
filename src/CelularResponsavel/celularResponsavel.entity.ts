import { Empresa } from "src/empresa/empresa.entity";
import { Responsavel } from "src/Responsavel/responsavel.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity("CelularResponsavel")
export class CelularResponsavel {
    public id: number;
    public idResponsavel: number;
    public idEmpresa: number;
    public codigoInternacional: string;
    public ddd: string;
    public celular: string;
    public principal: boolean;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Responsavel, (responsavel: Responsavel) => responsavel.id)
    @JoinColumn({
        name: "idResponsavel"
    })
    public responsavel: Responsavel;

    constructor(
        id: number,
        idResponsavel: number,
        idEmpresa: number,
        codigoInternacional: string,
        ddd: string,
        celular: string,
        principal: boolean
    ) {
        this.id = id
        this.idResponsavel = idResponsavel
        this.idEmpresa = idEmpresa
        this.codigoInternacional = codigoInternacional
        this.ddd = ddd
        this.celular = celular
        this.principal = principal
    }

}