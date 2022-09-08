export class CreateDocumentoDto {
    public idEmpresa: number;
    public idProjeto: number;
    public enviadoPor: number;
    public descricao: string;
    public arquivo: string;
    public versao: number;
    public local: string;
    public upload: Date;
    public status: string;
}
