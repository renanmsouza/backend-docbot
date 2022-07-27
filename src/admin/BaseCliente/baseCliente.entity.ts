import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Cliente } from "../Cliente/cliente.entity";

@Entity("BaseCliente")
export class BaseCliente {
    @PrimaryColumn()
    public ClienteId: number;
    @Column()
    public sufixo: string;
    @Column()
    public usuario: string;
    @Column()
    public senha: string;

    @OneToOne(() => Cliente, (cliente: Cliente) => cliente.id)
    cliente: Cliente;

    constructor(
        ClienteId: number,
        sufixo: string,
        usuario: string,
        senha: string
    ) {
        this.ClienteId = ClienteId
        this.sufixo = sufixo
        this.usuario = usuario
        this.senha = senha
    }

}