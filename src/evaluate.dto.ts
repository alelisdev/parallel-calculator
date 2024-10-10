import { IsString, Matches } from 'class-validator';

export class EvaluateDto {
  @IsString()
  @Matches(/^[0-9+\-*/() ]+$/, { message: 'Invalid characters in expression' })
  expression: string;
}
