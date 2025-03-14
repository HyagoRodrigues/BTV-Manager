import { IsEnum, IsObject, IsString } from 'class-validator';

export class CreateHabilidadeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(['passiva', 'ativa', 'reacao', 'ritual'])
  type: string;

  @IsObject()
  requirements: any;
}