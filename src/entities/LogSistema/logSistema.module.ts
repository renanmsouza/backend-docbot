import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogSistemaController } from './logSistema.constroller';
import { LogSistema } from './logSistema.entity';
import { LogSistemaService } from './LogSistema.service';

@Module({
    imports: [TypeOrmModule.forFeature([LogSistema], 'cliente')],
    controllers: [LogSistemaController],
    providers: [LogSistemaService],
})
export class LogSistemaModule { }
