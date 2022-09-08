import { Test, TestingModule } from '@nestjs/testing';
import { ParametrosPrioridadeController } from './parametros-prioridade.controller';
import { ParametrosPrioridadeService } from './parametros-prioridade.service';

describe('ParametrosPrioridadeController', () => {
  let controller: ParametrosPrioridadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametrosPrioridadeController],
      providers: [ParametrosPrioridadeService],
    }).compile();

    controller = module.get<ParametrosPrioridadeController>(ParametrosPrioridadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
