import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Usuario")
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public idCliente: number;
    @Column()
    public idUsuario: number;
    @Column()
    public nome: string;
    @Column()
    public nivel: number;
    @Column()
    public usuario: string;

    constructor(
        id: number,
        idCliente: number,
        idUsuario: number,
        nome: string,
        nivel: number,
        usuario: string
    ) {
        this.id = id
        this.idCliente = idCliente
        this.idUsuario = idUsuario
        this.nome = nome
        this.nivel = nivel
        this.usuario = usuario
    }

}