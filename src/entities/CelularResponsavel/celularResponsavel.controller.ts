import { Controller, Get, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Resposta } from "src/classes/resposta.class";
import { CelularResponsavel } from "./celularResponsavel.entity";
import { CelularResponsavelService } from "./celularResponsavel.service";

@Controller("celularResponsavel")
export class CelularResponsavelController {
    constructor(
        private readonly celularResponsavelService: CelularResponsavelService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Todos os Resultados', [await this.celularResponsavelService.findAll()]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(),[error]))
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('listar/:id')
    public async findById(@Param('id') id: number, @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', [await this.celularResponsavelService.findById(id)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(),[error]))
        }    
    }

    @UseGuards(JwtAuthGuard)
    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: CelularResponsavel = req.body as CelularResponsavel;

            await this.celularResponsavelService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data])); 
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));      
        }
    }
}