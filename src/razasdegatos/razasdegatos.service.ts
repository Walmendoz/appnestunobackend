import { Injectable } from '@nestjs/common';
import { CreateRazasdegatoDto } from './dto/create-razasdegato.dto';
import { UpdateRazasdegatoDto } from './dto/update-razasdegato.dto';

import { Razasdegato } from './entities/razasdegato.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RazasdegatosService {
  constructor(
    @InjectRepository(Razasdegato)
    private readonly razasdegatoRepository: Repository<Razasdegato>,
  ){}
    
  async create(createRazasdegatoDto: CreateRazasdegatoDto) {
    const raza = this.razasdegatoRepository.create(createRazasdegatoDto);
    return await this.razasdegatoRepository.save(raza);
  }

  async findAll() {
    return await this.razasdegatoRepository.find();
  }

  async findOne(id: number) {
    return await this.razasdegatoRepository.findOneBy({id});
  }

  async update(id: number, updateRazasdegatoDto: UpdateRazasdegatoDto) {
    return await this.razasdegatoRepository.update(id,updateRazasdegatoDto);  }

  async remove(id: number) {
    return await this.razasdegatoRepository.softDelete({id});
  }
}
