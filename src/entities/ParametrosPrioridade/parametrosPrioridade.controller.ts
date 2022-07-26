import { Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { Resposta } from "src/classes/resposta.class";
import { ParametrosPrioridade } from "./parametrosPrioridade.entity";
import { ParametrosPrioridadeService } from "./parametrosprioridade.service";

@Controller("parametrosPrioridade")
export class ParametrosPrioridadeController {
    constructor(
        private readonly parametrosPrioridadeService: ParametrosPrioridadeService
    ) { }

    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.parametrosPrioridadeService.findAll()));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }

    @Get('listar/:empresa/:prioridade')
    public async findById(@Param('empresa') empresa: number, @Param('prioridade') prioridade: number
        , @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', 
                [await this.parametrosPrioridadeService.findById(empresa, prioridade)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(), [error]))
        }
    }

    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: ParametrosPrioridade = req.body as ParametrosPrioridade;

            await this.parametrosPrioridadeService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data]));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }
}