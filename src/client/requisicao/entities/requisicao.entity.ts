import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Usuario } from "src/client/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Requisicao")
export class Requisicao {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idProjeto: number;
    @PrimaryColumn()
    public idUsuario: number;
    @Column()
    public idPrioridade: number;
    @Column()
    public descricao: string;
    @Column()
    public dataCriacao: Date;
    @Column()
    public dataFechamento: Date;
    @Column()
    public status: string;
    @Column()
    public dataVencimento: Date;
    @Column()
    public ultimoLembrete: Date;

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
        name: "idUsuario"    
    })
    public usuario: Usuario;
}
