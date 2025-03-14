import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campanha } from '../entities/campanha.entity';
import { CampanhaPersonagem } from '../entities/campanha-personagem.entity';
import { CreateCampanhaDto } from '../dto/create-campanha.dto';
import { CreateCampanhaPersonagemDto } from '../dto/create-campanha-personagem.dto';

@Injectable()
export class CampanhasService {
  constructor(
    @InjectRepository(Campanha)
    private readonly campanhasRepository: Repository<Campanha>,
    @InjectRepository(CampanhaPersonagem)
    private readonly campanhaPersonagemRepository: Repository<CampanhaPersonagem>,
  ) {}

  async create(createCampanhaDto: CreateCampanhaDto): Promise<Campanha> {
    const campanha = this.campanhasRepository.create(createCampanhaDto);
    return await this.campanhasRepository.save(campanha);
  }

  async addPersonagem(createCampanhaPersonagemDto: CreateCampanhaPersonagemDto): Promise<CampanhaPersonagem> {
    const campanhaPersonagem = this.campanhaPersonagemRepository.create(createCampanhaPersonagemDto);
    return await this.campanhaPersonagemRepository.save(campanhaPersonagem);
  }

  async findAll(): Promise<Campanha[]> {
    return await this.campanhasRepository.find({
      relations: ['mestre', 'personagens', 'personagens.personagem']
    });
  }

  async findOne(id: string): Promise<Campanha> {
    const campanha = await this.campanhasRepository.findOne({
      where: { id },
      relations: ['mestre', 'personagens', 'personagens.personagem']
    });
    
    if (!campanha) {
      throw new NotFoundException(`Campanha com ID ${id} não encontrada`);
    }
    return campanha;
  }

  async update(id: string, updateCampanhaDto: Partial<CreateCampanhaDto>): Promise<Campanha> {
    const campanha = await this.findOne(id);
    this.campanhasRepository.merge(campanha, updateCampanhaDto);
    return await this.campanhasRepository.save(campanha);
  }

  async remove(id: string): Promise<void> {
    const campanha = await this.findOne(id);
    await this.campanhasRepository.remove(campanha);
  }
}