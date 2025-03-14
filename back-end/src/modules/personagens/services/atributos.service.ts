import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atributo } from '../entities/atributo.entity';
import { CreateAtributoDto } from '../dto/create-atributo.dto';
import { UpdateAtributoDto } from '../dto/update-atributo.dto';

@Injectable()
export class AtributosService {
  constructor(
    @InjectRepository(Atributo)
    private readonly atributosRepository: Repository<Atributo>,
  ) {}

  async create(createAtributoDto: CreateAtributoDto): Promise<Atributo> {
    const atributo = this.atributosRepository.create(createAtributoDto);
    return await this.atributosRepository.save(atributo);
  }

  async findAll(): Promise<Atributo[]> {
    return await this.atributosRepository.find({
      relations: ['personagem']
    });
  }

  async findOne(id: string): Promise<Atributo> {
    const atributo = await this.atributosRepository.findOne({
      where: { id },
      relations: ['personagem']
    });
    
    if (!atributo) {
      throw new NotFoundException(`Atributos com ID ${id} não encontrado`);
    }
    return atributo;
  }

  async update(id: string, updateAtributoDto: UpdateAtributoDto): Promise<Atributo> {
    const atributo = await this.findOne(id);
    this.atributosRepository.merge(atributo, updateAtributoDto);
    return await this.atributosRepository.save(atributo);
  }

  async remove(id: string): Promise<void> {
    const atributo = await this.findOne(id);
    await this.atributosRepository.remove(atributo);
  }
}