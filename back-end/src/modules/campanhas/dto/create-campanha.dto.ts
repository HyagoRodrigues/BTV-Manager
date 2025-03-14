import { IsEnum, IsString, IsUUID } from 'class-validator';

export class CreateCampanhaDto {
  @IsUUID()
  mestreId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(['ativa', 'pausada', 'concluida', 'cancelada'])
  status: string;
}