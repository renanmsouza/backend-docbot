export class Resposta {
    public mensagem: string;
    public detalhes: string;
    public objeto: Array<any> = [];

    constructor(mensagem: string, detalhes: string, objeto: Array<any> = []) {
        this.mensagem = mensagem
        this.detalhes = detalhes
        this.objeto = objeto
    }
}