import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../Cliente/cliente.entity";

@Entity("UsuarioSistema")
export class UsuarioSistema {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public clienteId: number;
    @Column()
    public nome: string;
    @Column()
    public usuario: string;
    @Column()
    public senha: string;
    @Column()
    public nivel: number;
 
    @ManyToOne(() => Cliente, (cliente: Cliente) => cliente.id)
    cliente: Cliente;

    constructor(
        id: number,
        nome: string,
        usuario: string,
        senha: string,
        nivel: number
    ) {
        this.id = id
        this.nome = nome
        this.usuario = usuario
        this.senha = senha
        this.nivel = nivel
    }

}