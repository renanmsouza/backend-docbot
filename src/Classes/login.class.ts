import { UsuarioSistema } from "src/admin/usuario-sistema/entities/usuario-sistema.entity";

export class Login {
    public usuario: UsuarioSistema;
    public autorizacao: string;
    public status: number;
    public mensagem: string;

    constructor(
        usuario: UsuarioSistema,
        autorizacao: string,
        status: number,
        mensagem: string
    ) {
        this.usuario = usuario
        this.autorizacao = autorizacao
        this.status = status
        this.mensagem = mensagem
    }

}