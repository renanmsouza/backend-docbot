import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoContatoService } from './grupo-contato.service';
import { CreateGrupoContatoDto } from './dto/create-grupo-contato.dto';
import { UpdateGrupoContatoDto } from './dto/update-grupo-contato.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('grupo contato')
@Controller('grupo-contato')
export class GrupoContatoController {
  constructor(private readonly grupoContatoService: GrupoContatoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createGrupoContatoDto: CreateGrupoContatoDto) {
    return this.grupoContatoService.create(createGrupoContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.grupoContatoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoContatoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoContatoDto: UpdateGrupoContatoDto) {
    return this.grupoContatoService.update(+id, updateGrupoContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoContatoService.remove(+id);
  }
}
