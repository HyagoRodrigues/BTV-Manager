import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Personagem } from './personagem.entity';
import { Habilidade } from './habilidade.entity';

@Entity('personagem_habilidades')
export class PersonagemHabilidade {
  @PrimaryColumn({ name: 'personagem_id' })
  personagemId: string;

  @PrimaryColumn({ name: 'habilidade_id' })
  habilidadeId: string;

  @Column()
  level: number;

  @CreateDateColumn({ name: 'acquired_at' })
  acquiredAt: Date;

  @ManyToOne(() => Personagem, personagem => personagem.habilidades)
  @JoinColumn({ name: 'personagem_id' })
  personagem: Personagem;

  @ManyToOne(() => Habilidade, habilidade => habilidade.personagens)
  @JoinColumn({ name: 'habilidade_id' })
  habilidade: Habilidade;
}