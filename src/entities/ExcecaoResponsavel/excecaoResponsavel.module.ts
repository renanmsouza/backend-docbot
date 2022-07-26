import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcecaoResponsavelController } from './excecaoResponsavel.controller';
import { ExcecaoResponsavel } from './excecaoResponsavel.entity';
import { ExcecaoResponsavelService } from './excecaoResponsavel.service';

@Module({
    imports: [TypeOrmModule.forFeature([ExcecaoResponsavel], 'cliente')],
    controllers: [ExcecaoResponsavelController],
    providers: [ExcecaoResponsavelService],
})
export class ExcecaoResponsavelModule { }
