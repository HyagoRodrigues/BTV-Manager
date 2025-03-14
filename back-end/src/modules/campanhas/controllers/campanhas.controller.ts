import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampanhasService } from '../services/campanhas.service';
import { CreateCampanhaDto } from '../dto/create-campanha.dto';
import { CreateCampanhaPersonagemDto } from '../dto/create-campanha-personagem.dto';

@Controller('campanhas')
export class CampanhasController {
  constructor(private readonly campanhasService: CampanhasService) {}

  @Post()
  create(@Body() createCampanhaDto: CreateCampanhaDto) {
    return this.campanhasService.create(createCampanhaDto);
  }

  @Post('personagem')
  addPersonagem(@Body() createCampanhaPersonagemDto: CreateCampanhaPersonagemDto) {
    return this.campanhasService.addPersonagem(createCampanhaPersonagemDto);
  }

  @Get()
  findAll() {
    return this.campanhasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campanhasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCampanhaDto: Partial<CreateCampanhaDto>) {
    return this.campanhasService.update(id, updateCampanhaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campanhasService.remove(id);
  }
}