import { Cliente } from "src/admin/Cliente/entities/cliente.entity";
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";

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
}
