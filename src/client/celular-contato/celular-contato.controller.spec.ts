import { Test, TestingModule } from '@nestjs/testing';
import { CelularContatoController } from './celular-contato.controller';
import { CelularContatoService } from './celular-contato.service';

describe('CelularContatoController', () => {
  let controller: CelularContatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CelularContatoController],
      providers: [CelularContatoService],
    }).compile();

    controller = module.get<CelularContatoController>(CelularContatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
