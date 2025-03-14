import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateAtributoDto {
  @IsUUID()
  personagemId: string;

  @IsNumber()
  @Min(1)
  strength: number;

  @IsNumber()
  @Min(1)
  dexterity: number;

  @IsNumber()
  @Min(1)
  constitution: number;

  @IsNumber()
  @Min(1)
  intelligence: number;

  @IsNumber()
  @Min(1)
  wisdom: number;

  @IsNumber()
  @Min(1)
  charisma: number;
}