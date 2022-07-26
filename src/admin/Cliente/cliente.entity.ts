import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Cliente")
export class Cliente {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public nome: string;
    @Column()
    public tipo: string;
    @Column()
    public documento: string;
    @Column()
    public email: string;
    @Column()
    public senha: string;
    @Column()
    public ativo: boolean;

    constructor(
        id: number,
        nome: string,
        tipo: string,
        documento: string,
        email: string,
        senha: string,
        ativo: boolean
    ) {
        this.id = id
        this.nome = nome
        this.tipo = tipo
        this.documento = documento
        this.email = email
        this.senha = senha
        this.ativo = ativo
    }

}