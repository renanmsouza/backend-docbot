import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ContatoService } from './contato.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Controller('contato')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createContatoDto: CreateContatoDto) {
    return this.contatoService.create(createContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.contatoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contatoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContatoDto: UpdateContatoDto) {
    return this.contatoService.update(+id, updateContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatoService.remove(+id);
  }
}
