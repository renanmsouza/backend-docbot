import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { EnvioService } from './envio.service';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('envio')
export class EnvioController {
  constructor(private readonly envioService: EnvioService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEnvioDto: CreateEnvioDto) {
    return this.envioService.create(createEnvioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.envioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.envioService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnvioDto: UpdateEnvioDto) {
    return this.envioService.update(+id, updateEnvioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.envioService.remove(+id);
  }
}
