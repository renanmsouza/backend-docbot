import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CelularResponsavelController } from './celularResponsavel.controller';
import { CelularResponsavel } from './celularResponsavel.entity';
import { CelularResponsavelService } from './celularResponsavel.service';

@Module({
    imports: [TypeOrmModule.forFeature([CelularResponsavel], 'cliente')],
    controllers: [CelularResponsavelController],
    providers: [CelularResponsavelService],
})
export class CelularResponsavelModule { }
