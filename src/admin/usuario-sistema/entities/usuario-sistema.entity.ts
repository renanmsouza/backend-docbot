import { Exclude } from "class-transformer";
import { Cliente } from "src/admin/Cliente/entities/cliente.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
    @Exclude()
    @Column()
    public senha: string;
    @Column()
    public nivel: number;
 
    @ManyToOne(() => Cliente, (cliente: Cliente) => cliente.id)
    cliente: Cliente;
}
