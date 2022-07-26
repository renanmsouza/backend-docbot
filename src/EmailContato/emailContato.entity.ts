import { Contato } from "src/Contato/contato.entity";
import { Empresa } from "src/empresa/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("EmailContato")
export class EmailContato {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idContato: number;
    @Column()
    public email: string;
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
        email: string,
        principal: boolean,
        obs: string
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idContato = idContato
        this.email = email
        this.principal = principal
        this.obs = obs
    }

}