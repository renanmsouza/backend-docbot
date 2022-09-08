import { Injectable, Response } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BaseClienteService } from 'src/admin/base-cliente/base-cliente.service';
import { UsuarioSistemaService } from 'src/admin/usuario-sistema/usuario-sistema.service';
import { Login } from 'src/classes/login.class';
import { comparaHashStrings } from 'src/utils/bcrypt';
import { PayloadInterface } from './interfaces/payload.interface';

@Injectable()
export class AuthService { 
    constructor(
        private readonly usuarioSistemaService: UsuarioSistemaService,
        private readonly baseClienteService: BaseClienteService,
        private jwtService: JwtService
    ){}

    public async validaUsuario(usuario: string, senha: string): Promise<Login> {
        const usuarioSisterma = await this.usuarioSistemaService.findUsuario(usuario);
        const baseCliente = await this.baseClienteService.findOne(usuarioSisterma.clienteId);

        const payload: PayloadInterface = {
            sub: usuarioSisterma.id,
            username: usuarioSisterma.usuario,
            sufixo: baseCliente.sufixo
        }

        if (usuarioSisterma && comparaHashStrings(senha, usuarioSisterma.senha)) {
            return new Login(
                usuarioSisterma,
                this.jwtService.sign(payload),
                200,
                'Login executado com sucesso'
            )
        } else {
            return new Login(
                null,
                '',
                401,
                'Não Autorizado'
            )
        }
    }
}
