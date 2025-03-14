import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personagem } from './entities/personagem.entity';
import { Atributo } from './entities/atributo.entity';
import { Habilidade } from './entities/habilidade.entity';
import { PersonagemHabilidade } from './entities/personagem-habilidade.entity';
import { PersonagensService } from './services/personagens.service';
import { AtributosService } from './services/atributos.service';
import { HabilidadesService } from './services/habilidades.service';
import { PersonagensController } from './controllers/personagens.controller';
import { AtributosController } from './controllers/atributos.controller';
import { HabilidadesController } from './controllers/habilidades.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Personagem, Atributo, Habilidade, PersonagemHabilidade])],
  providers: [PersonagensService, AtributosService, HabilidadesService],
  controllers: [PersonagensController, AtributosController, HabilidadesController],
  exports: [PersonagensService, AtributosService, HabilidadesService]
})
export class PersonagensModule {}