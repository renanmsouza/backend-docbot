import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametrosPrioridadeService } from './parametros-prioridade.service';
import { CreateParametrosPrioridadeDto } from './dto/create-parametros-prioridade.dto';
import { UpdateParametrosPrioridadeDto } from './dto/update-parametros-prioridade.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('parametros-prioridade')
export class ParametrosPrioridadeController {
  constructor(private readonly parametrosPrioridadeService: ParametrosPrioridadeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createParametrosPrioridadeDto: CreateParametrosPrioridadeDto) {
    return this.parametrosPrioridadeService.create(createParametrosPrioridadeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.parametrosPrioridadeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:prioridade')
  findOne(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string) {
    return this.parametrosPrioridadeService.findOne(+empresa, +prioridade);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string, @Body() updateParametrosPrioridadeDto: UpdateParametrosPrioridadeDto) {
    return this.parametrosPrioridadeService.update(+empresa, +prioridade, updateParametrosPrioridadeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:prioridade')
  remove(@Param('empresa') empresa: string, @Param('prioridade') prioridade: string) {
    return this.parametrosPrioridadeService.remove(+empresa, +prioridade);
  }
}
