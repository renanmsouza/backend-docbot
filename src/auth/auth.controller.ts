import { CACHE_MANAGER, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Inject, Request } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { Response } from 'express';
import { Login } from 'src/classes/login.class';
import { Resposta } from 'src/classes/resposta.class';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
    ){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    public async login(@Request() req, @Res() res: Response): Promise<Response> {
        const login: Login = req.user as Login;
        
        if (login.status == 200) {
            req.session.userId = login.usuario.id;
            req.session.clienteId = login.usuario.clienteId;
            req.session.authToken = login.autorizacao;
            
            await this.cacheManager.set('userId', login.usuario.id);
            await this.cacheManager.set('clienteId', login.usuario.clienteId);
            await this.cacheManager.set('authToken', login.autorizacao);

            return res.status(login.status).send(new Resposta('Sucesso', login.mensagem, [login]))
        } else {
            return res.status(login.status).send(new Resposta('Falha', login.mensagem, []))    
        }
    }
}
