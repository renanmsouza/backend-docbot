import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoController } from './documento.controller';
import { Documento } from './documento.entity';
import { DocumentoService } from './documento.service';

@Module({
    imports: [TypeOrmModule.forFeature([Documento])],
    controllers: [DocumentoController],
    providers: [DocumentoService],
})
export class DocumentoModule { }
