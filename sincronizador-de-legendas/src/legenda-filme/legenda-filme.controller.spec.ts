import { Test, TestingModule } from '@nestjs/testing';
import { LegendaFilmeController } from './legenda-filme.controller';
import { LegendaFilmeService } from './legenda-filme.service';

describe('LegendaFilmeController', () => {
  let controller: LegendaFilmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LegendaFilmeController],
      providers: [LegendaFilmeService],
    }).compile();

    controller = module.get<LegendaFilmeController>(LegendaFilmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
