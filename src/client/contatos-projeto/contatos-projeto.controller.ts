import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatosProjetoService } from './contatos-projeto.service';
import { CreateContatosProjetoDto } from './dto/create-contatos-projeto.dto';
import { UpdateContatosProjetoDto } from './dto/update-contatos-projeto.dto';

@Controller('contatos-projeto')
export class ContatosProjetoController {
  constructor(private readonly contatosProjetoService: ContatosProjetoService) {}

  @Post()
  create(@Body() createContatosProjetoDto: CreateContatosProjetoDto) {
    return this.contatosProjetoService.create(createContatosProjetoDto);
  }

  @Get()
  findAll() {
    return this.contatosProjetoService.findAll();
  }

  @Get(':empresa/:projeto/:contato')
  findOne(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('contato') contato: string) {
    return this.contatosProjetoService.findOne(+empresa, +projeto, +contato);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContatosProjetoDto: UpdateContatosProjetoDto) {
  //   return this.contatosProjetoService.update(+id, updateContatosProjetoDto);
  // }

  @Delete(':empresa/:projeto/:contato')
  remove(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('contato') contato: string) {
    return this.contatosProjetoService.remove(+empresa, +projeto, +contato);
  }
}
