import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE')
        private readonly authService: AuthService
    ){
        super()
    }

    public async validaUsuario(usuario: string, senha: string) {
        this.authService.validaUsuario(usuario, senha);
    }
}