import { Cliente } from "src/admin/Cliente/cliente.entity";
import { UsuarioSistema } from "src/admin/UsuarioSistema/usuarioSistema.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Usuario")
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public idCliente: number;
    @Column()
    public idUsuario: number;

    constructor(
        id: number,
        idCliente: number,
        idUsuario: number,
    ) {
        this.id = id
        this.idCliente = idCliente
        this.idUsuario = idUsuario
    }

}