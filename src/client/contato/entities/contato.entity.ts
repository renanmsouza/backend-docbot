import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Usuario } from "src/client/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Contato")
export class Contato {
    @PrimaryGeneratedColumn()
    public id: number; 
    @PrimaryColumn()
    public idEmpresa: number; 
    @Column()
    public idUsuario: number;
    @Column()
    public nome: string;
    @Column()
    public tipo: string;
    @Column()
    public cpfCnpj: string;

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
