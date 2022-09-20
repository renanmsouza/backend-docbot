import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExcecaoResponsavelService } from './excecao-responsavel.service';
import { CreateExcecaoResponsavelDto } from './dto/create-excecao-responsavel.dto';
import { UpdateExcecaoResponsavelDto } from './dto/update-excecao-responsavel.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('responsavel')
@Controller('excecao-responsavel')
export class ExcecaoResponsavelController {
  constructor(private readonly excecaoResponsavelService: ExcecaoResponsavelService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createExcecaoResponsavelDto: CreateExcecaoResponsavelDto) {
    return this.excecaoResponsavelService.create(createExcecaoResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.excecaoResponsavelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:prioridade/:responsavel')
  findOne(@Param('empresa') empresa: string,
    @Param('prioridade') prioridade: string,
    @Param('responsavel') responsavel: string) {
    return this.excecaoResponsavelService.findOne(+empresa, +prioridade, +responsavel);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':empresa/:prioridade/:responsavel')
  update(@Param('empresa') empresa: string,
    @Param('prioridade') prioridade: string,
    @Param('responsavel') responsavel: string, @Body() updateExcecaoResponsavelDto: UpdateExcecaoResponsavelDto) {
    return this.excecaoResponsavelService.update(+empresa, +prioridade, +responsavel, updateExcecaoResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:prioridade/:responsavel')
  remove(@Param('empresa') empresa: string,
    @Param('prioridade') prioridade: string,
    @Param('responsavel') responsavel: string) {
    return this.excecaoResponsavelService.remove(+empresa, +prioridade, +responsavel);
  }
}
