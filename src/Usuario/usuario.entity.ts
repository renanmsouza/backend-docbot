import { Empresa } from "src/empresa/empresa.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Usuario")
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @Column()
    public nome: string;
    @Column()
    public tipo: string;
    @Column()
    public usuario: string;
    @Column()
    public senha: string;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;


    constructor(
        id: number,
        idEmpresa: number,
        nome: string,
        tipo: string,
        usuario: string,
        senha: string
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.nome = nome
        this.tipo = tipo
        this.usuario = usuario
        this.senha = senha
    }

}