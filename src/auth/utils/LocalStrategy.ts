import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Login } from "src/classes/login.class";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService
    ){
        super({
            usernameField: 'usuario',
            passwordField: 'senha'
        })
    }

    public async validate(usuario: string, senha: string) {
        const login: Login = await this.authService.validaUsuario(usuario, senha);

        return login;
    }
}