import { Controller, Get, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Resposta } from "src/classes/resposta.class";
import { ExcecaoContato } from "./excecaoContato.entity";
import { ExcecaoContatoService } from "./excecaoContato.service";

@Controller("excecaoContato")
export class ExcecaoContatoController {
    constructor(
        private readonly excecaoContatoService: ExcecaoContatoService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.excecaoContatoService.findAll()));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('listar/:empresa/:prioridade/:contato')
    public async findById(
            @Param('empresa') empresa: number, 
            @Param('prioridade') prioridade: number, 
            @Param('contato') contato: number
        , @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', 
                [await this.excecaoContatoService.findById(empresa, prioridade, contato)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(), [error]))
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: ExcecaoContato = req.body as ExcecaoContato;

            await this.excecaoContatoService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data]));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }
}