import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExcecaoGrupoService } from './excecao-grupo.service';
import { CreateExcecaoGrupoDto } from './dto/create-excecao-grupo.dto';
import { UpdateExcecaoGrupoDto } from './dto/update-excecao-grupo.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('grupo')
@Controller('excecao-grupo')
export class ExcecaoGrupoController {
  constructor(private readonly excecaoGrupoService: ExcecaoGrupoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createExcecaoGrupoDto: CreateExcecaoGrupoDto) {
    return this.excecaoGrupoService.create(createExcecaoGrupoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.excecaoGrupoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:prioridade/:projeto/:grupoContato')
  findOne(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Param('projeto') projeto: string, @Param('grupoContato') grupoContato: string) {
    return this.excecaoGrupoService.findOne(+empresa, +prioridade, +projeto, +grupoContato);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':empresa/:prioridade/:projeto/:grupoContato')
  update(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Param('projeto') projeto: string, @Param('grupoContato') grupoContato: string, @Body() updateExcecaoGrupoDto: UpdateExcecaoGrupoDto) {
    return this.excecaoGrupoService.update(+empresa, +prioridade, +projeto, +grupoContato, updateExcecaoGrupoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:prioridade/:projeto/:grupoContato')
  remove(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Param('projeto') projeto: string, @Param('grupoContato') grupoContato: string) {
    return this.excecaoGrupoService.remove(+empresa, +prioridade, +projeto, +grupoContato);
  }
}
