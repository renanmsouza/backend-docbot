import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioSistemaService } from './usuario-sistema.service';
import { CreateUsuarioSistemaDto } from './dto/create-usuario-sistema.dto';
import { UpdateUsuarioSistemaDto } from './dto/update-usuario-sistema.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('admin/usuario-sistema')
export class UsuarioSistemaController {
  constructor(private readonly usuarioSistemaService: UsuarioSistemaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUsuarioSistemaDto: CreateUsuarioSistemaDto) {
    return this.usuarioSistemaService.create(createUsuarioSistemaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usuarioSistemaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioSistemaService.findOne(+id);
  }

  
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioSistemaDto: UpdateUsuarioSistemaDto) {
    return this.usuarioSistemaService.update(+id, updateUsuarioSistemaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioSistemaService.remove(+id);
  }
}
