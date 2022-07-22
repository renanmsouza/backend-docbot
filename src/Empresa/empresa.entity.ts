import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Empresa")
export class Empresa {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public nome: string;
    @Column()
    public tipo: string;
    @Column()
    public cpfCnpj: string;

    constructor(
        id: number,
        nome: string,
        tipo: string,
        cpfCnpj: string,
    ) {
        this.id = id
        this.nome = nome
        this.tipo = tipo
        this.cpfCnpj = cpfCnpj
    }
}

