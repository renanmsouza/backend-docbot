import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Projeto")
export class Projeto {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @Column()
    public criador: number;
    @Column()
    public descricao: string;
    @Column()
    public obs: string;
    @Column()
    public ativo: boolean;
    @Column()
    public dataInicio: Date;
    @Column()
    public dataFim: Date;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;
}
