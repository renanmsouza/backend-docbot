import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailContatoController } from './emailcontato.controller';
import { EmailContato } from './emailContato.entity';
import { EmailContatoService } from './emailContato.service';

@Module({
    imports: [TypeOrmModule.forFeature([EmailContato], 'cliente')],
    controllers: [EmailContatoController],
    providers: [EmailContatoService],
})
export class EmailContatoModule {}
