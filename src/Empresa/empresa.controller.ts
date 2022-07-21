import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Resposta } from 'src/Classes/resposta.class';
import { EmpresaService } from './empresa.service';

@Controller("empresa")
export class EmpresaController {
    constructor(
        private readonly empresaService: EmpresaService
    ){}

    @Get()
    public async findAll(@Res() res: Response): Promise<Response> {
        try {
            return res.status(200).send(new Resposta('Sucesso', 'Todos os Resultados',await this.empresaService.findAll()))
        } catch (error) {
            return res.status(200).send(new Resposta('Erro', error.toString(),[error]))
        }
    }

}
