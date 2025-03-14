import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personagem } from '../entities/personagem.entity';
import { CreatePersonagemDto } from '../dto/create-personagem.dto';
import { UpdatePersonagemDto } from '../dto/update-personagem.dto';

@Injectable()
export class PersonagensService {
  constructor(
    @InjectRepository(Personagem)
    private readonly personagensRepository: Repository<Personagem>,
  ) {}

  async create(createPersonagemDto: CreatePersonagemDto): Promise<Personagem> {
    const personagem = this.personagensRepository.create(createPersonagemDto);
    return await this.personagensRepository.save(personagem);
  }

  async findAll(): Promise<Personagem[]> {
    return await this.personagensRepository.find({
      relations: ['usuario']
    });
  }

  async findOne(id: string): Promise<Personagem> {
    const personagem = await this.personagensRepository.findOne({
      where: { id },
      relations: ['usuario']
    });
    
    if (!personagem) {
      throw new NotFoundException(`Personagem com ID ${id} não encontrado`);
    }
    return personagem;
  }

  async update(id: string, updatePersonagemDto: UpdatePersonagemDto): Promise<Personagem> {
    const personagem = await this.findOne(id);
    this.personagensRepository.merge(personagem, updatePersonagemDto);
    return await this.personagensRepository.save(personagem);
  }

  async remove(id: string): Promise<void> {
    const personagem = await this.findOne(id);
    await this.personagensRepository.remove(personagem);
  }
}