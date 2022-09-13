import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

export function decodeToken(token: string) {
    const jwtService = new JwtService({secret: jwtConstants.secret});

    return jwtService.decode(token);
}