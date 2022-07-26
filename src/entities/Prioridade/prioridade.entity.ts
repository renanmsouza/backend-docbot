import { Empresa } from "src/entities/Empresa/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Prioridade")
export class Prioridade {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @Column()
    public descricao: string;
    @Column()
    public referencia: number;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    constructor(
        id: number,
        idEmpresa: number,
        descricao: string,
        referencia: number
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.descricao = descricao
        this.referencia = referencia
    }
}