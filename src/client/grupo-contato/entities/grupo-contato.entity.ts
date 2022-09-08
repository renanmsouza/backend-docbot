import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("GrupoContato")
export class GrupoContato {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @Column()
    public descricao: string;
    @Column()
    public obs: string;

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
}
