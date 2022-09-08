import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjetoDto: CreateProjetoDto) {
    return this.projetoService.create(createProjetoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.projetoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projetoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjetoDto: UpdateProjetoDto) {
    return this.projetoService.update(+id, updateProjetoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projetoService.remove(+id);
  }
}
