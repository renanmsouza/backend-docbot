import { Empresa } from "src/entities/Empresa/empresa.entity";
import { Usuario } from "src/entities/Usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("LogSistema")
export class LogSistema {
    @PrimaryGeneratedColumn()
    public id: number;
    @PrimaryColumn()
    public idEmpresa: number;
    @PrimaryColumn()
    public idUsuario: number;
    @Column()
    public evento: string;
    @Column()
    public data: Date;
    @Column()
    public hora: Date;

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