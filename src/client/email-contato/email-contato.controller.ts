import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailContatoService } from './email-contato.service';
import { CreateEmailContatoDto } from './dto/create-email-contato.dto';
import { UpdateEmailContatoDto } from './dto/update-email-contato.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contato')
@Controller('email-contato')
export class EmailContatoController {
  constructor(private readonly emailContatoService: EmailContatoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmailContatoDto: CreateEmailContatoDto) {
    return this.emailContatoService.create(createEmailContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.emailContatoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailContatoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailContatoDto: UpdateEmailContatoDto) {
    return this.emailContatoService.update(+id, updateEmailContatoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailContatoService.remove(+id);
  }
}
