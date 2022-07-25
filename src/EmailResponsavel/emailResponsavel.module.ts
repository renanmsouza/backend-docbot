import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailResponsavelController } from './emailResponsavel.controller';
import { EmailResponsavel } from './emailResponsavel.entity';
import { EmailResponsavelService } from './emailResponsavel.service';

@Module({
    imports: [TypeOrmModule.forFeature([EmailResponsavel])],
    controllers: [EmailResponsavelController],
    providers: [EmailResponsavelService],
})
export class EmailResponsavelModule { }
