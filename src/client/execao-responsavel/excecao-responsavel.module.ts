import { Module } from '@nestjs/common';
import { ExcecaoResponsavelService } from './excecao-responsavel.service';
import { ExcecaoResponsavelController } from './excecao-responsavel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcecaoResponsavel } from './entities/excecao-responsavel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExcecaoResponsavel], 'cliente')],
  controllers: [ExcecaoResponsavelController],
  providers: [ExcecaoResponsavelService]
})
export class ExcecaoResponsavelModule {}
