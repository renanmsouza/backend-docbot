import { Controller, Get, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Resposta } from "src/classes/resposta.class";
import { ResponsaveisProjetoService } from "./ResponsaveisProjeto.service";
import { ResponsaveisProjeto } from "./responsaviesProjeto.entity";

@Controller("responsaveisProjeto")
export class ResponsaveisProjetoController {
    constructor(
        private readonly responsaveisProjetoService: ResponsaveisProjetoService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.responsaveisProjetoService.findAll()));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('listar/:empresa/:projeto/:responsavel')
    public async findById(@Param('empresa') empresa: number,
        @Param('projeto') projeto: number,
        @Param('responsavel') responsavel: number,
        @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID',
                [await this.responsaveisProjetoService.findById(
                    empresa,
                    projeto,
                    responsavel
                )]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(), [error]))
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: ResponsaveisProjeto = req.body as ResponsaveisProjeto;

            await this.responsaveisProjetoService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data]));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }
}