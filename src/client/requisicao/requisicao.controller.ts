import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequisicaoService } from './requisicao.service';
import { CreateRequisicaoDto } from './dto/create-requisicao.dto';
import { UpdateRequisicaoDto } from './dto/update-requisicao.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';

@Controller('requisicao')
export class RequisicaoController {
  constructor(private readonly requisicaoService: RequisicaoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRequisicaoDto: CreateRequisicaoDto) {
    return this.requisicaoService.create(createRequisicaoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.requisicaoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requisicaoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequisicaoDto: UpdateRequisicaoDto) {
    return this.requisicaoService.update(+id, updateRequisicaoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requisicaoService.remove(+id);
  }
}
