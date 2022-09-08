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
    public ativo: boolean;
}
