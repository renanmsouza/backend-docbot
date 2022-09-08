export class CreateProjetoDto {
    public idEmpresa: number;
    public criador: number;
    public descricao: string;
    public obs: string;
    public ativo: boolean;
    public dataInicio: Date;
    public dataFim: Date;
}
