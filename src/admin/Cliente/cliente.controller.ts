import { Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Resposta } from 'src/classes/resposta.class';
import { Cliente } from './cliente.entity';
import { ClienteService } from './cliente.service';

@Controller("cliente")
export class ClienteController { 
    constructor(
        private readonly clienteService: ClienteService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get("listar")
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200)
                .send(new Resposta('Sucesso', 'Todos os Resultados', await this.clienteService.findAll()));    
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));    
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('listar/:id')
    public async findById(@Param('id') id: number, @Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Pesquisa por ID', [await this.clienteService.findById(id)]))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(),[error]))
        }    
    }

    @UseGuards(JwtAuthGuard)
    @Post("salvar")
    public async salvar(@Req() req: Request, @Res() res: Response): Promise<Response> {
        try {
            const data: Cliente = req.body as Cliente;

            await this.clienteService.save(data);

            return res.status(200)
                .send(new Resposta('Sucesso', 'Resultado Salvo', [data])); 
        } catch (error) {
            return res.status(500)
                .send(new Resposta('Falha ao obter os dados', error.toString(), [error]));      
        }
    }
}
