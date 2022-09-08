import { Module } from '@nestjs/common';
import { ResponsavelService } from './responsavel.service';
import { ResponsavelController } from './responsavel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsavel } from './entities/responsavel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsavel], 'cliente')],
  controllers: [ResponsavelController],
  providers: [ResponsavelService]
})
export class ResponsavelModule {}
