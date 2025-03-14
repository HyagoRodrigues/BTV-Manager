import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { PersonagemHabilidade } from './personagem-habilidade.entity';

@Entity('habilidades')
export class Habilidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'varchar',
    enum: ['passiva', 'ativa', 'reacao', 'ritual']
  })
  type: string;

  @Column('jsonb')
  requirements: any;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => PersonagemHabilidade, ph => ph.habilidade)
  personagens: PersonagemHabilidade[];
}