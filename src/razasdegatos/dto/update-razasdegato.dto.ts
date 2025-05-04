import { PartialType } from '@nestjs/mapped-types';
import { CreateRazasdegatoDto } from './create-razasdegato.dto';
import { IsOptional } from 'class-validator';

export class UpdateRazasdegatoDto extends PartialType(CreateRazasdegatoDto) {
        
    @IsOptional()
    name?: string;
}
