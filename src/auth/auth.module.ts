import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        AuthController,],
    providers: [
        {
            provide: "AUTH_SERVICE",
            useClass: AuthService
        },],
})
export class AuthModule { }
