import { IsEnum, IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class CreatePersonagemDto {
  @IsUUID()
  usuarioId: string;

  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  level: number;

  @IsNumber()
  @Min(0)
  experience: number;

  @IsEnum(['ativo', 'inativo', 'deletado'])
  status: string;
}