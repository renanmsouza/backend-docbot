import { Module } from '@nestjs/common';
import { EmailResponsavelService } from './email-responsavel.service';
import { EmailResponsavelController } from './email-responsavel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailResponsavel } from './entities/email-responsavel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmailResponsavel], 'cliente')],
  controllers: [EmailResponsavelController],
  providers: [EmailResponsavelService]
})
export class EmailResponsavelModule {}
