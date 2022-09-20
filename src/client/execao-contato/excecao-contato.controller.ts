import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExcecaoContatoService } from './excecao-contato.service';
import { CreateExcecaoContatoDto } from './dto/create-excecao-contato.dto';
import { UpdateExcecaoContatoDto } from './dto/update-excecao-contato.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contato')
@Controller('execao-contato')
export class ExcecaoContatoController {
  constructor(private readonly execaoContatoService: ExcecaoContatoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createExcecaoContatoDto: CreateExcecaoContatoDto) {
    return this.execaoContatoService.create(createExcecaoContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.execaoContatoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:prioridade/:contato')
  findOne(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Param('contato') contato: string) {
    return this.execaoContatoService.findOne(+empresa, +prioridade, +contato);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':empresa/:prioridade/:contato')
  update(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Param('contato') contato: string, 
  @Body() updateExcecaoContatoDto: UpdateExcecaoContatoDto) {
    return this.execaoContatoService.update(+empresa, +prioridade, +contato, updateExcecaoContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:prioridade/:contato')
  remove(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Param('contato') contato: string) {
    return this.execaoContatoService.remove(+empresa, +prioridade, +contato);
  }
}
