import { Module } from '@nestjs/common';
import { ResponsablesService } from './responsables.service';
import { ResponsablesController } from './responsables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsable } from './entities/responsable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Responsable])],
  controllers: [ResponsablesController],
  providers: [ResponsablesService],
})
export class ResponsablesModule {}
