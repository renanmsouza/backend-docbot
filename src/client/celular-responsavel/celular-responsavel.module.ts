import { Module } from '@nestjs/common';
import { CelularResponsavelService } from './celular-responsavel.service';
import { CelularResponsavelController } from './celular-responsavel.controller';
import { CelularResponsavel } from './entities/celular-responsavel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CelularResponsavel], 'cliente')],
  controllers: [CelularResponsavelController],
  providers: [CelularResponsavelService]
})
export class CelularResponsavelModule {}
