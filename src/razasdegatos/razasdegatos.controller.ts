import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RazasdegatosService } from './razasdegatos.service';
import { CreateRazasdegatoDto } from './dto/create-razasdegato.dto';
import { UpdateRazasdegatoDto } from './dto/update-razasdegato.dto';

@Controller('razasdegatos')
export class RazasdegatosController {
  constructor(private readonly razasdegatosService: RazasdegatosService) {}

  @Post()
  create(@Body() createRazasdegatoDto: CreateRazasdegatoDto) {
    return this.razasdegatosService.create(createRazasdegatoDto);
  }

  @Get()
  findAll() {
    return this.razasdegatosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.razasdegatosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRazasdegatoDto: UpdateRazasdegatoDto) {
    return this.razasdegatosService.update(id, updateRazasdegatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.razasdegatosService.remove(id);
  }
}
