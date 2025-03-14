import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreatePersonagemHabilidadeDto {
  @IsUUID()
  personagemId: string;

  @IsUUID()
  habilidadeId: string;

  @IsNumber()
  @Min(1)
  level: number;
}