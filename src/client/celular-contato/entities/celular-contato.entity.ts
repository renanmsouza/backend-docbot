import { Contato } from "src/client/contato/entities/contato.entity";
import { Empresa } from "src/client/empresa/entities/empresa.entity";
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
}