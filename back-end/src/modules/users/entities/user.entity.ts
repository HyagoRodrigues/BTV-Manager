import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Personagem } from '../../personagens/entities/personagem.entity';
import { Campanha } from '../../campanhas/entities/campanha.entity';

@Entity('usuarios')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({
    type: 'varchar',
    enum: ['admin', 'mestre', 'jogador']
  })
  role: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Personagem, personagem => personagem.usuario)
  personagens: Personagem[];

  @OneToMany(() => Campanha, campanha => campanha.mestre)
  campanhas: Campanha[];
}