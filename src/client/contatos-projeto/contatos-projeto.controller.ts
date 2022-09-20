import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ContatosProjetoService } from './contatos-projeto.service';
import { CreateContatosProjetoDto } from './dto/create-contatos-projeto.dto';
import { UpdateContatosProjetoDto } from './dto/update-contatos-projeto.dto';

@ApiTags('projeto')
@Controller('contatos-projeto')
export class ContatosProjetoController {
  constructor(private readonly contatosProjetoService: ContatosProjetoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createContatosProjetoDto: CreateContatosProjetoDto) {
    return this.contatosProjetoService.create(createContatosProjetoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.contatosProjetoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:projeto/:contato')
  findOne(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('contato') contato: string) {
    return this.contatosProjetoService.findOne(+empresa, +projeto, +contato);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContatosProjetoDto: UpdateContatosProjetoDto) {
  //   return this.contatosProjetoService.update(+id, updateContatosProjetoDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:projeto/:contato')
  remove(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('contato') contato: string) {
    return this.contatosProjetoService.remove(+empresa, +projeto, +contato);
  }
}
