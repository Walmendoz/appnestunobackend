import { Injectable } from '@nestjs/common';
import { CreateResponsableDto } from './dto/create-responsable.dto';
import { UpdateResponsableDto } from './dto/update-responsable.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Responsable } from './entities/responsable.entity';

@Injectable()
export class ResponsablesService {

   constructor(
      @InjectRepository(Responsable)
      private readonly responsablesRepository: Repository<Responsable>,
    ){}

  async create(createResponsableDto: CreateResponsableDto) {
    const responsable = this.responsablesRepository.create(createResponsableDto);
    return await this.responsablesRepository.save(responsable);  }

  async findAll() {
    return await this.responsablesRepository.find();  }

  async findOne(id: number) {
    return await `This action returns a #${id} responsable`;
  }

  async update(id: number, updateResponsableDto: UpdateResponsableDto) {
    return await `This action updates a #${id} responsable`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} responsable`;
  }
}
