import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { application, Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { BaseClienteService } from './base-cliente.service';
import { CreateBaseClienteDto } from './dto/create-base-cliente.dto';
import { UpdateBaseClienteDto } from './dto/update-base-cliente.dto';

@Controller('admin/base-cliente')
export class BaseClienteController {
  constructor(private readonly baseClienteService: BaseClienteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBaseClienteDto: CreateBaseClienteDto) {
    return this.baseClienteService.create(createBaseClienteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.baseClienteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.baseClienteService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBaseClienteDto: UpdateBaseClienteDto) {
    return this.baseClienteService.update(+id, updateBaseClienteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseClienteService.remove(+id);
  }


  static ClienteConnection(req: Request): TypeOrmModuleOptions {
    
    let connection: TypeOrmModuleOptions = {
        type: "mysql",
        host: "cottonsheep.com.br",
        port: 3306,
        username: "cotton82_admin",
        password: "Cottonsheep1793*",
        database: "cotton82_DB_DocBot_000000",
        entities: [
          "dist/client/**/*.entity{.ts,.js}"
        ],
        synchronize: false,
      } 

    

    return connection;
  }
}
