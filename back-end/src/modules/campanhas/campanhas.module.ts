import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campanha } from './entities/campanha.entity';
import { CampanhaPersonagem } from './entities/campanha-personagem.entity';
import { CampanhasService } from './services/campanhas.service';
import { CampanhasController } from './controllers/campanhas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Campanha, CampanhaPersonagem])],
  providers: [CampanhasService],
  controllers: [CampanhasController],
  exports: [CampanhasService]
})
export class CampanhasModule {}