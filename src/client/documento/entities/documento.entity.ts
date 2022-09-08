import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Usuario } from "src/client/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Documento")
export class Documento {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @Column()
    public enviadoPor: number;
    @Column()
    public descricao: string;
    @Column()
    public arquivo: string;
    @Column()
    public versao: number;
    @Column()
    public local: string;
    @Column()
    public upload: Date;
    @Column()
    public status: string;

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

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.id)
    @JoinColumn({
        name: "enviadoPor"    
    })
    public usuario: Usuario;
}
