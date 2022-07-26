import { Empresa } from "src/entities/Empresa/empresa.entity";
import { Usuario } from "src/entities/Usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Contato")
export class Responsavel {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn() 
    public idEmpresa: number;
    @Column()
    public idUsuario: number; 
    @Column()
    public nome: string;
    @Column() 
    public ativo: boolean;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.id)
    @JoinColumn({
        name: "idUsuario"    
    })
    public usuario: Usuario;
}