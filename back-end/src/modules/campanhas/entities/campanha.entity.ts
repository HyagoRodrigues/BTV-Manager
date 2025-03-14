import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { CampanhaPersonagem } from './campanha-personagem.entity';

@Entity('campanhas')
export class Campanha {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'mestre_id' })
  mestreId: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'varchar',
    enum: ['ativa', 'pausada', 'concluida', 'cancelada']
  })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.campanhas)
  @JoinColumn({ name: 'mestre_id' })
  mestre: User;

  @OneToMany(() => CampanhaPersonagem, cp => cp.campanha)
  personagens: CampanhaPersonagem[];
}