import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Usuario")
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public idCliente: number;
    @Column()
    public idUsuario: number;
}
