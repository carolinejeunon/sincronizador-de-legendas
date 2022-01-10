import { PartialType } from '@nestjs/mapped-types';
import { CreateLegendaFilmeDto } from './create-legenda-filme.dto';

export class UpdateLegendaFilmeDto extends PartialType(CreateLegendaFilmeDto) {}
