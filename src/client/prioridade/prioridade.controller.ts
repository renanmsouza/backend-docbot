import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrioridadeService } from './prioridade.service';
import { CreatePrioridadeDto } from './dto/create-prioridade.dto';
import { UpdatePrioridadeDto } from './dto/update-prioridade.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('prioridade')
@Controller('prioridade')
export class PrioridadeController {
  constructor(private readonly prioridadeService: PrioridadeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPrioridadeDto: CreatePrioridadeDto) {
    return this.prioridadeService.create(createPrioridadeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.prioridadeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prioridadeService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrioridadeDto: UpdatePrioridadeDto) {
    return this.prioridadeService.update(+id, updatePrioridadeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prioridadeService.remove(+id);
  }
}
