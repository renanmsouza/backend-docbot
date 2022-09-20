import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ContatosGrupoService } from './contatos-grupo.service';
import { CreateContatosGrupoDto } from './dto/create-contatos-grupo.dto';
import { UpdateContatosGrupoDto } from './dto/update-contatos-grupo.dto';

@ApiTags('grupo contato')
@Controller('contatos-grupo')
export class ContatosGrupoController {
  constructor(private readonly contatosGrupoService: ContatosGrupoService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createContatosGrupoDto: CreateContatosGrupoDto) {
    return this.contatosGrupoService.create(createContatosGrupoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.contatosGrupoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:projeto/:grupoContato/:contato')
  findOne(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('grupoContato') grupoContato: string, @Param('contato') contato: string) {
    return this.contatosGrupoService.findOne(+empresa, +projeto, +grupoContato, +contato);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateContatosGrupoDto: UpdateContatosGrupoDto) {
  //   return this.contatosGrupoService.update(+id, updateContatosGrupoDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:projeto/:grupoContato/:contato')
  remove(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('grupoContato') grupoContato: string, @Param('contato') contato: string) {
    return this.contatosGrupoService.remove(+empresa, +projeto, +grupoContato, +contato);
  }
}
