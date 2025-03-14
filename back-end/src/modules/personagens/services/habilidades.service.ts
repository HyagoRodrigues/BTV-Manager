import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habilidade } from '../entities/habilidade.entity';
import { CreateHabilidadeDto } from '../dto/create-habilidade.dto';
import { UpdateHabilidadeDto } from '../dto/update-habilidade.dto';

@Injectable()
export class HabilidadesService {
  constructor(
    @InjectRepository(Habilidade)
    private readonly habilidadesRepository: Repository<Habilidade>,
  ) {}

  async create(createHabilidadeDto: CreateHabilidadeDto): Promise<Habilidade> {
    const habilidade = this.habilidadesRepository.create(createHabilidadeDto);
    return await this.habilidadesRepository.save(habilidade);
  }

  async findAll(): Promise<Habilidade[]> {
    return await this.habilidadesRepository.find({
      relations: ['personagens']
    });
  }

  async findOne(id: string): Promise<Habilidade> {
    const habilidade = await this.habilidadesRepository.findOne({
      where: { id },
      relations: ['personagens']
    });
    
    if (!habilidade) {
      throw new NotFoundException(`Habilidade com ID ${id} não encontrada`);
    }
    return habilidade;
  }

  async update(id: string, updateHabilidadeDto: UpdateHabilidadeDto): Promise<Habilidade> {
    const habilidade = await this.findOne(id);
    this.habilidadesRepository.merge(habilidade, updateHabilidadeDto);
    return await this.habilidadesRepository.save(habilidade);
  }

  async remove(id: string): Promise<void> {
    const habilidade = await this.findOne(id);
    await this.habilidadesRepository.remove(habilidade);
  }
}