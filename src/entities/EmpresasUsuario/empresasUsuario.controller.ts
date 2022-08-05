import { Controller, Get, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Resposta } from "src/classes/resposta.class";
import { EmpresasUsuario } from "./empresasUsuario.entity";
import { EmpresasUsuarioService } from "./empresasUsuario.service";

@Controller("EmpresasUsuario")
export class EmpresasUsuarioController {
    constructor(
        private readonly empresasUsuarioService: EmpresasUsuarioService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.empresasUsuarioService.findAll()));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('listar/:empresa/:usuario')
    public async findById(@Param('empresa') empresa: number, @Param('usuario') usuario: number
        , @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', 
                [await this.empresasUsuarioService.findById(empresa, usuario)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(), [error]))
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: EmpresasUsuario = req.body as EmpresasUsuario;

            await this.empresasUsuarioService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data]));
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));
        }
    }
}
