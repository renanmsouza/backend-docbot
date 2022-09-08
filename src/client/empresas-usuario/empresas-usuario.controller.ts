import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresasUsuarioService } from './empresas-usuario.service';
import { CreateEmpresasUsuarioDto } from './dto/create-empresas-usuario.dto';
import { UpdateEmpresasUsuarioDto } from './dto/update-empresas-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('empresas-usuario')
export class EmpresasUsuarioController {
  constructor(private readonly empresasUsuarioService: EmpresasUsuarioService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmpresasUsuarioDto: CreateEmpresasUsuarioDto) {
    return this.empresasUsuarioService.create(createEmpresasUsuarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.empresasUsuarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/usuario')
  findOne(@Param('empresa') empresa: string, @Param('usuario') usuario: string) {
    return this.empresasUsuarioService.findOne(+empresa, +usuario);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmpresasUsuarioDto: UpdateEmpresasUsuarioDto) {
  //   return this.empresasUsuarioService.update(+id, updateEmpresasUsuarioDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/usuario')
  remove(@Param('empresa') empresa: string, @Param('usuario') usuario: string) {
    return this.empresasUsuarioService.remove(+empresa, +usuario);
  }
}
