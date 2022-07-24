import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Resposta } from 'src/Classes/resposta.class';
import { Responsavel } from './responsavel.entity';
import { ResponsavelService } from './responsavel.service';

@Controller("responsavel")
export class ResponsavelController { 
    constructor(
        private readonly responsavelService: ResponsavelService
    ){}

    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.responsavelService.findAll()));    
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));    
        }
    }

    @Get(':id')
    public async findById(@Param('id') id: number, @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', [await this.responsavelService.findById(id)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(),[error]))
        }    
    }

    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: Responsavel = req.body as Responsavel;

            await this.responsavelService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data])); 
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));      
        }
    }
}
