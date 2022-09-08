export class CreateBaseClienteDto {
    public ClienteId: number;
    public sufixo: string;
    public usuario: string;
    public senha: string;

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
