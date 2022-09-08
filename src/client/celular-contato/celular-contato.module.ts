import { Module } from '@nestjs/common';
import { CelularContatoService } from './celular-contato.service';
import { CelularContatoController } from './celular-contato.controller';
import { CelularContato } from './entities/celular-contato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CelularContato], 'cliente')],
  controllers: [CelularContatoController],
  providers: [CelularContatoService]
})
export class CelularContatoModule {}
