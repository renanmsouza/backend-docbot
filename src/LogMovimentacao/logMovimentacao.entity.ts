import { Empresa } from "src/empresa/empresa.entity";
import { Usuario } from "src/Usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("LogMovimentacao")
export class LogMovimentacao {
    @PrimaryGeneratedColumn()
    id: number;
    @PrimaryColumn()
    idEmpresa: number;
    @PrimaryColumn()
    idUsuario: number;
    @Column()
    evento: string;
    @Column()
    data: Date;
    @Column()
    hora: Date;

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

    constructor(
        id: number,
        idEmpresa: number,
        idUsuario: number,
        evento: string,
        data: Date,
        hora: Date
    ) {
        this.id = id
        this.idEmpresa = idEmpresa
        this.idUsuario = idUsuario
        this.evento = evento
        this.data = data
        this.hora = hora
    }

}