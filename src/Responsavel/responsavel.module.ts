import { ResponsavelController } from './responsavel.controller';
import { ResponsavelService } from './responsavel.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Response])],
    controllers: [
        ResponsavelController,],
    providers: [
        ResponsavelService,],
})
export class ResponsavelModule { }
