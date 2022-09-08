import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CelularContatoService } from './celular-contato.service';
import { CreateCelularContatoDto } from './dto/create-celular-contato.dto';
import { UpdateCelularContatoDto } from './dto/update-celular-contato.dto';

@Controller('celular-contato')
export class CelularContatoController {
  constructor(private readonly celularContatoService: CelularContatoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCelularContatoDto: CreateCelularContatoDto) {
    return this.celularContatoService.create(createCelularContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.celularContatoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.celularContatoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCelularContatoDto: UpdateCelularContatoDto) {
    return this.celularContatoService.update(+id, updateCelularContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.celularContatoService.remove(+id);
  }
}
