export class CreateExcecaoGrupoDto {
    idEmpresa: number; 
    idPrioridade: number;
    idProjeto: number;
    idGrupoContato: number;
    relembrar: boolean;
    tempoEmail: number;
    tempoWhats: number;
    tempoSMS: number;
}
