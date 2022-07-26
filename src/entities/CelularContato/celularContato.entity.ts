import { Contato } from "src/entities/Contato/contato.entity";
import { Empresa } from "src/entities/Empresa/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("CelularContato")
export class CelularContato {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idContato: number;
    @Column()
    public codigoInternacional: string;
    @Column()
    public ddd: string;
    @Column()
    public celular: string;
    @Column()
    public principal: boolean;
    @Column()
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