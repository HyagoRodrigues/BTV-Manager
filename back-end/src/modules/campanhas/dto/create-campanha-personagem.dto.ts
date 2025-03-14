import { IsEnum, IsUUID } from 'class-validator';

export class CreateCampanhaPersonagemDto {
  @IsUUID()
  campanhaId: string;

  @IsUUID()
  personagemId: string;

  @IsEnum(['ativo', 'inativo', 'morto', 'ausente'])
  status: string;
}