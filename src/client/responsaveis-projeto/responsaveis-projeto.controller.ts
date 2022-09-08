import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ResponsaveisProjetoService } from './responsaveis-projeto.service';
import { CreateResponsaveisProjetoDto } from './dto/create-responsaveis-projeto.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('responsaveis-projeto')
export class ResponsaveisProjetoController {
  constructor(private readonly responsaveisProjetoService: ResponsaveisProjetoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createResponsaveisProjetoDto: CreateResponsaveisProjetoDto) {
    return this.responsaveisProjetoService.create(createResponsaveisProjetoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.responsaveisProjetoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:projeto/:responnsavel')
  findOne(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('responsavel') responsavel: string) {
    return this.responsaveisProjetoService.findOne(+empresa, +projeto, +responsavel);
  }

  // @Patch(':empresa/:projeto/:responnsavel')
  // update(@Param('id') id: string, @Body() updateResponsaveisProjetoDto: UpdateResponsaveisProjetoDto) {
  //   return this.responsaveisProjetoService.update(+id, updateResponsaveisProjetoDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:projeto/:responnsavel')
  remove(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('responsavel') responsavel: string) {
    return this.responsaveisProjetoService.remove(+empresa, +projeto, +responsavel);
  }
}
