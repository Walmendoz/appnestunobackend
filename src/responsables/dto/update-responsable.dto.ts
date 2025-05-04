import { PartialType } from '@nestjs/mapped-types';
import { CreateResponsableDto } from './create-responsable.dto';
import { IsOptional } from 'class-validator';

export class UpdateResponsableDto extends PartialType(CreateResponsableDto) {
      @IsOptional()
        name?: string;
}
