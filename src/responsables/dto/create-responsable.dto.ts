import { IsString, MinLength } from "class-validator";

export class CreateResponsableDto {
     @IsString()
        @MinLength(1)
        name: string;
    }

