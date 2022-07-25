import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcecaoContatoController } from './excecaoContato.controller';
import { ExcecaoContato } from './excecaoContato.entity';
import { ExcecaoContatoService } from './excecaoContato.service';

@Module({
    imports: [TypeOrmModule.forFeature([ExcecaoContato])],
    controllers: [ExcecaoContatoController],
    providers: [ExcecaoContatoService],
})
export class ExcecaoContatoModule { }
