import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonagensService } from '../services/personagens.service';
import { CreatePersonagemDto } from '../dto/create-personagem.dto';
import { UpdatePersonagemDto } from '../dto/update-personagem.dto';

@Controller('personagens')
export class PersonagensController {
  constructor(private readonly personagensService: PersonagensService) {}

  @Post()
  create(@Body() createPersonagemDto: CreatePersonagemDto) {
    return this.personagensService.create(createPersonagemDto);
  }

  @Get()
  findAll() {
    return this.personagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personagensService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonagemDto: UpdatePersonagemDto) {
    return this.personagensService.update(id, updatePersonagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personagensService.remove(id);
  }
}