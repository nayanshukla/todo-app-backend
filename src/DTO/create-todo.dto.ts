import { IsDate, IsNotEmpty, IsOptional, Length, MaxLength } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  @MaxLength(15, {message: 'Max length is 25 characters.'})
  title: string;
  @IsNotEmpty()
  description: string;
}