import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponsavelService } from './responsavel.service';
import { CreateResponsavelDto } from './dto/create-responsavel.dto';
import { UpdateResponsavelDto } from './dto/update-responsavel.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('responsavel')
export class ResponsavelController {
  constructor(private readonly responsavelService: ResponsavelService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createResponsavelDto: CreateResponsavelDto) {
    return this.responsavelService.create(createResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.responsavelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsavelService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsavelDto: UpdateResponsavelDto) {
    return this.responsavelService.update(+id, updateResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsavelService.remove(+id);
  }
}
