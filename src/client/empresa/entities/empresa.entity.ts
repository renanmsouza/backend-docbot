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
}
