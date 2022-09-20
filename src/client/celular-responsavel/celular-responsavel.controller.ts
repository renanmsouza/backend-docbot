import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CelularResponsavelService } from './celular-responsavel.service';
import { CreateCelularResponsavelDto } from './dto/create-celular-responsavel.dto';
import { UpdateCelularResponsavelDto } from './dto/update-celular-responsavel.dto';

@ApiTags('responsavel')
@Controller('celular-responsavel')
export class CelularResponsavelController {
  constructor(private readonly celularResponsavelService: CelularResponsavelService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCelularResponsavelDto: CreateCelularResponsavelDto) {
    return this.celularResponsavelService.create(createCelularResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.celularResponsavelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.celularResponsavelService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCelularResponsavelDto: UpdateCelularResponsavelDto) {
    return this.celularResponsavelService.update(+id, updateCelularResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.celularResponsavelService.remove(+id);
  }
}
