import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Responsavel } from "src/client/responsavel/entities/responsavel.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("EmailResponsavel")
export class EmailResponsavel {
    @PrimaryGeneratedColumn()
    public id: number; 
    @PrimaryColumn()
    public idResponsavel: number; 
    @PrimaryColumn()
    public idEmpresa: number;
    @Column()
    public email: string;
    @Column()
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
}
