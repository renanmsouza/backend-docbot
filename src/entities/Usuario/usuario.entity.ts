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

    @OneToOne(() => Cliente, (cliente: Cliente) => cliente.id)
    @JoinColumn({
        name: "idCliente"
    })
    cliente: Cliente;

    @OneToOne(() => UsuarioSistema, (usuarioSistema: UsuarioSistema) => usuarioSistema.id)
    @JoinColumn({
        name: "idUsuario"
    })
    usuarioSistema: UsuarioSistema


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