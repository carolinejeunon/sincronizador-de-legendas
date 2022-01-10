/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateLegendaFilmeDto } from './dto/create-legenda-filme.dto';
import { UpdateLegendaFilmeDto } from './dto/update-legenda-filme.dto';
import { PrismaService } from '../prisma/prisma.service';
import { LegendaFilme } from '@prisma/client';

@Injectable()
export class LegendaFilmeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLegendaFilmeDto: CreateLegendaFilmeDto): Promise<LegendaFilme> {
    return await this.prisma.legendaFilme.create({
      data: {...createLegendaFilmeDto}
    });
  }

  async findAll(): Promise<string[]> {
    return await (await this.prisma.legendaFilme.findMany()).map(legendaFilme => 
      `${legendaFilme.id}\n${this.formataDataLegenda(legendaFilme.tempo_inicio_milisegundos)}->${this.formataDataLegenda(legendaFilme.tempo_fim_milisegundos)}\n${legendaFilme.texto}`);
  }

  async findOne(id: number): Promise<string> {
    const legendaFilme = await this.prisma.legendaFilme.findUnique({
      where: {id}, 
    });
    return `${legendaFilme.id}\n${this.formataDataLegenda(legendaFilme.tempo_inicio_milisegundos)}->${this.formataDataLegenda(legendaFilme.tempo_fim_milisegundos)}\n${legendaFilme.texto}`;

  }

  async update(id: number, updateLegendaFilmeDto: UpdateLegendaFilmeDto) {
    return await this.prisma.legendaFilme.update({
      data: {...updateLegendaFilmeDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return await this.prisma.legendaFilme.delete({
      where: {id},
    });
  }

  async offset(offset: number): Promise<LegendaFilme[]> {
    const legendas = await this.prisma.legendaFilme.findMany();
    legendas.forEach(legenda => {
      legenda.tempo_inicio_milisegundos += offset;
      legenda.tempo_fim_milisegundos += offset;
    })
    await this.prisma.legendaFilme.updateMany({
      data: legendas
    });
    return legendas
  }

  private formataDataLegenda(tempoMilisegundos: number){
    const milisegundos = tempoMilisegundos % 1000;
    const tempoSegundos = Math.floor(tempoMilisegundos/1000);
    const segundos = tempoSegundos%60;
    const tempoMinutos = Math.floor(tempoSegundos/60);
    const minutos = tempoMinutos%60;
    const tempoHoras = Math.floor(tempoMinutos/60);

    return `${tempoHoras}:${minutos}:${segundos},${milisegundos}`
  }
}
