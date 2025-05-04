import { IsString, MinLength } from "class-validator";
 
export class CreateRazasdegatoDto {
    @IsString()
    @MinLength(1)
    name: string;
}
