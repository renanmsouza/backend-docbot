import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvioController } from './envio.controller';
import { Envio } from './envio.entity';
import { EnvioService } from './envio.service';

@Module({
    imports: [TypeOrmModule.forFeature([Envio])],
    controllers: [EnvioController],
    providers: [EnvioService],
})
export class EnvioModule {}
