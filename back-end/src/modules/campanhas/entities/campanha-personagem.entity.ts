import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Campanha } from './campanha.entity';
import { Personagem } from '../../personagens/entities/personagem.entity';

@Entity('campanha_personagens')
export class CampanhaPersonagem {
  @PrimaryColumn({ name: 'campanha_id' })
  campanhaId: string;

  @PrimaryColumn({ name: 'personagem_id' })
  personagemId: string;

  @CreateDateColumn({ name: 'joined_at' })
  joinedAt: Date;

  @Column({
    type: 'varchar',
    enum: ['ativo', 'inativo', 'morto', 'ausente']
  })
  status: string;

  @ManyToOne(() => Campanha, campanha => campanha.personagens)
  @JoinColumn({ name: 'campanha_id' })
  campanha: Campanha;

  @ManyToOne(() => Personagem, personagem => personagem.campanhas)
  @JoinColumn({ name: 'personagem_id' })
  personagem: Personagem;
}