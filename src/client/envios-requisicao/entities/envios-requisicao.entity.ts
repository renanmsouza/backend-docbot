import { Documento } from "src/client/documento/entities/documento.entity";
import { Empresa } from "src/client/empresa/entities/empresa.entity";
import { Envio } from "src/client/envio/entities/envio.entity";
import { Projeto } from "src/client/projeto/entities/projeto.entity";
import { Requisicao } from "src/client/requisicao/entities/requisicao.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("EnviosRequisicao")
export class EnviosRequisicao {
    @PrimaryColumn()
    idProjeto: number; 
    @PrimaryColumn()
    idEmpresa: number;
    @PrimaryColumn()
    idRequisicao: number;
    @PrimaryColumn()
    idEnvio: number;
    @PrimaryColumn()
    idDocumento: number;

    @ManyToOne(() => Empresa, (empresa: Empresa) => empresa.id)
    @JoinColumn({
        name: "idEmpresa"    
    })
    public empresa: Empresa;

    @ManyToOne(() => Projeto, (projeto: Projeto) => projeto.id)
    @JoinColumn({
        name: "idProjeto"    
    })
    public projeto: Projeto;

    @ManyToOne(() => Requisicao, (requisicao: Requisicao) => requisicao.id)
    @JoinColumn({
        name: "idRequisicao"    
    })
    public requisicao: Requisicao;

    @ManyToOne(() => Envio, (envio: Envio) => envio.id)
    @JoinColumn({
        name: "idEnvio"    
    })
    public envio: Envio;

    @ManyToOne(() => Documento, (documento: Documento) => documento.id)
    @JoinColumn({
        name: "idDocumento"    
    })
    public documento: Documento;
}
