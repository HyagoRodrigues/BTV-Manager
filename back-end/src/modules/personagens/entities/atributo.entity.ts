import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Personagem } from './personagem.entity';

@Entity('atributos')
export class Atributo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'personagem_id' })
  personagemId: string;

  @Column()
  strength: number;

  @Column()
  dexterity: number;

  @Column()
  constitution: number;

  @Column()
  intelligence: number;

  @Column()
  wisdom: number;

  @Column()
  charisma: number;

  @OneToOne(() => Personagem, personagem => personagem.atributos)
  @JoinColumn({ name: 'personagem_id' })
  personagem: Personagem;
}