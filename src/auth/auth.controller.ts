import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { Login } from 'src/classes/login.class';
import { Resposta } from 'src/classes/resposta.class';

@Controller('auth')
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
    public async login(@Request() req, @Res() res: Response): Promise<Response> {
        const login: Login = req.user as Login;
        
        if (login.status == 200) {
            return res.status(login.status).send(new Resposta('Sucesso', login.mensagem, [login]))
        } else {
            return res.status(login.status).send(new Resposta('Falha', login.mensagem, []))    
        }
    }
}
