/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegendaFilmeService } from './legenda-filme.service';
import { CreateLegendaFilmeDto } from './dto/create-legenda-filme.dto';
import { UpdateLegendaFilmeDto } from './dto/update-legenda-filme.dto';

@Controller('legenda-filme')
export class LegendaFilmeController {
  constructor(private readonly legendaFilmeService: LegendaFilmeService) {}

  @Post()
  create(@Body() createLegendaFilmeDto: CreateLegendaFilmeDto) {
    return this.legendaFilmeService.create(createLegendaFilmeDto);
  }

  @Get()
  findAll() {
    return this.legendaFilmeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legendaFilmeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegendaFilmeDto: UpdateLegendaFilmeDto) {
    return this.legendaFilmeService.update(+id, updateLegendaFilmeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legendaFilmeService.remove(+id);
  }

  //tenho que receber o número de segundos que vou fazer a alteração

  @Patch('offset/:offset')
  offset(@Param('offset') offset: number) {
    return this.legendaFilmeService.offset(offset);
  }
}
