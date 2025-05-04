import { Module } from '@nestjs/common';
import { RazasdegatosService } from './razasdegatos.service';
import { RazasdegatosController } from './razasdegatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Razasdegato } from './entities/razasdegato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Razasdegato])],
  controllers: [RazasdegatosController],
  providers: [RazasdegatosService],
})
export class RazasdegatosModule {}
