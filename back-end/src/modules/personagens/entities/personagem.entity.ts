import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Atributo } from './atributo.entity';
import { CampanhaPersonagem } from '../../campanhas/entities/campanha-personagem.entity';
import { PersonagemHabilidade } from './personagem-habilidade.entity';

@Entity('personagens')
export class Personagem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'usuario_id' })
  usuarioId: string;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  experience: number;

  @Column({
    type: 'varchar',
    enum: ['ativo', 'inativo', 'deletado']
  })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.personagens)
  @JoinColumn({ name: 'usuario_id' })
  usuario: User;

  @OneToOne(() => Atributo, atributo => atributo.personagem)
  atributos: Atributo;

  @OneToMany(() => CampanhaPersonagem, cp => cp.personagem)
  campanhas: CampanhaPersonagem[];

  @OneToMany(() => PersonagemHabilidade, ph => ph.personagem)
  habilidades: PersonagemHabilidade[];
}