import { Module } from '@nestjs/common';
import { LegendaFilmeService } from './legenda-filme.service';
import { LegendaFilmeController } from './legenda-filme.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LegendaFilmeController],
  providers: [LegendaFilmeService],
  imports: [PrismaModule],
})
export class LegendaFilmeModule {}
