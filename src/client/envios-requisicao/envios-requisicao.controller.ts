import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnviosRequisicaoService } from './envios-requisicao.service';
import { CreateEnviosRequisicaoDto } from './dto/create-envios-requisicao.dto';
import { UpdateEnviosRequisicaoDto } from './dto/update-envios-requisicao.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('requisicao')
@Controller('envios-requisicao')
export class EnviosRequisicaoController {
  constructor(private readonly enviosRequisicaoService: EnviosRequisicaoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEnviosRequisicaoDto: CreateEnviosRequisicaoDto) {
    return this.enviosRequisicaoService.create(createEnviosRequisicaoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.enviosRequisicaoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':empresa/:projeto/:requisicao/:envio/:documento')
  findOne(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('requisicao') requisicao: string, @Param('envio') envio: string, @Param('documento') documento: string) {
    return this.enviosRequisicaoService.findOne(+empresa, +projeto, +requisicao, +envio, +documento);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEnviosRequisicaoDto: UpdateEnviosRequisicaoDto) {
  //   return this.enviosRequisicaoService.update(+id, updateEnviosRequisicaoDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Delete(':empresa/:projeto/:requisicao/:envio/:documento')
  remove(@Param('empresa') empresa: string, @Param('projeto') projeto: string, @Param('requisicao') requisicao: string, @Param('envio') envio: string, @Param('documento') documento: string) {
    return this.enviosRequisicaoService.remove(+empresa, +projeto, +requisicao, +envio, +documento);
  }
}
