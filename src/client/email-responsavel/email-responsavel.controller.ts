import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailResponsavelService } from './email-responsavel.service';
import { CreateEmailResponsavelDto } from './dto/create-email-responsavel.dto';
import { UpdateEmailResponsavelDto } from './dto/update-email-responsavel.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('responsavel')
@Controller('email-responsavel')
export class EmailResponsavelController {
  constructor(private readonly emailResponsavelService: EmailResponsavelService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEmailResponsavelDto: CreateEmailResponsavelDto) {
    return this.emailResponsavelService.create(createEmailResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.emailResponsavelService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailResponsavelService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmailResponsavelDto: UpdateEmailResponsavelDto) {
    return this.emailResponsavelService.update(+id, updateEmailResponsavelDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emailResponsavelService.remove(+id);
  }
}
