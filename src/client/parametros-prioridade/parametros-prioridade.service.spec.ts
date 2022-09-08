import { Test, TestingModule } from '@nestjs/testing';
import { ParametrosPrioridadeService } from './parametros-prioridade.service';

describe('ParametrosPrioridadeService', () => {
  let service: ParametrosPrioridadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametrosPrioridadeService],
    }).compile();

    service = module.get<ParametrosPrioridadeService>(ParametrosPrioridadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
