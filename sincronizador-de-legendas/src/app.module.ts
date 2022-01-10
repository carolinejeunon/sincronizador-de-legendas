import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LegendaFilmeModule } from './legenda-filme/legenda-filme.module';

@Module({
  imports: [LegendaFilmeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
