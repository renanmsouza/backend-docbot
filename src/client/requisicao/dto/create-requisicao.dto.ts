export class CreateRequisicaoDto {
    public idEmpresa: number;
    public idProjeto: number;
    public idUsuario: number;
    public idPrioridade: number;
    public descricao: string;
    public dataCriacao: Date;
    public dataFechamento: Date;
    public status: string;
    public dataVencimento: Date;
    public ultimoLembrete: Date;
}
