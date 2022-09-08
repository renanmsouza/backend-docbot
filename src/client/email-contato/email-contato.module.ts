import { Module } from '@nestjs/common';
import { EmailContatoService } from './email-contato.service';
import { EmailContatoController } from './email-contato.controller';
import { EmailContato } from './entities/email-contato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmailContato], 'cliente')],
  controllers: [EmailContatoController],
  providers: [EmailContatoService]
})
export class EmailContatoModule {}
