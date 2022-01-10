import { Test, TestingModule } from '@nestjs/testing';
import { LegendaFilmeService } from './legenda-filme.service';

describe('LegendaFilmeService', () => {
  let service: LegendaFilmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LegendaFilmeService],
    }).compile();

    service = module.get<LegendaFilmeService>(LegendaFilmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
