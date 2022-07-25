import { Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Resposta } from "src/Classes/resposta.class";
import { ExcecaoResponsavel } from "./excecaoResponsavel.entity";
import { ExcecaoResponsavelService } from "./excecaoResponsavel.service";

@Controller("ExcecaoResponsavel")
export class ExcecaoResponsavelController {
    constructor(
        private readonly excecaoResponsavelService: ExcecaoResponsavelService
    ){}

    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.excecaoResponsavelService.findAll()));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }

    @Get('listar/:empresa/:prioridade/:responsavel')
    public async findById(
            @Param('empresa') empresa: number, 
            @Param('prioridade') prioridade: number, 
            @Param('responsavel') responsavel: number
        , @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', 
                [await this.excecaoResponsavelService.findById(empresa, prioridade, responsavel)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(), [error]))
        }
    }

    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: ExcecaoResponsavel = req.body as ExcecaoResponsavel;

            await this.excecaoResponsavelService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data]));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }
}