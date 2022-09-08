import { Module } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { DocumentoController } from './documento.controller';
import { Documento } from './entities/documento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Documento], 'cliente')],
  controllers: [DocumentoController],
  providers: [DocumentoService]
})
export class DocumentoModule {}
