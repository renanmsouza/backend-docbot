import { Contato } from "src/Contato/contato.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity("CelularContato")
export class CelularContato {
    public id: number;
    public idEmpresa: number;
    public idContato: number;
    public codigoInternacional: string;
    public ddd: string;
    public celular: string;
    public principal: boolean;
    public obs: string;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Contato, (contato: Contato) => contato.id)
    @JoinColumn({
        name: "idContato"
    })
    public contato: Contato;

    constructor(
        id: number,
        idEmpresa: number,
        idContato: number,
        codigoInternacional: string,
        ddd: string,
        celular: string,
        principal: boolean,
        obs: string
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idContato = idContato
        this.codigoInternacional = codigoInternacional
        this.ddd = ddd
        this.celular = celular
        this.principal = principal
        this.obs = obs
    }

}