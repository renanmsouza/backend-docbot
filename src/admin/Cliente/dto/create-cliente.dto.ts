export class CreateClienteDto {
    public nome: string;
    public tipo: string;
    public documento: string;
    public email: string;
    public ativo: boolean;

    constructor(
        nome: string,
        tipo: string,
        documento: string,
        email: string,
        ativo: boolean
    ) {
        this.nome = nome
        this.tipo = tipo
        this.documento = documento
        this.email = email
        this.ativo = ativo
    }
}
