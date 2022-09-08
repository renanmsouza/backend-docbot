export class CreateEnvioDto {
    public idEmpresa: number;
    public idProjeto: number;
    public idDocumento: number;
    public idUsuario: number;
    public descricao: string;
    public abertura: Date;
    public status: string;
    public envio: Date;
}
