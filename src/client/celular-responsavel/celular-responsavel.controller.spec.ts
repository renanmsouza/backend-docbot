import { Test, TestingModule } from '@nestjs/testing';
import { CelularResponsavelController } from './celular-responsavel.controller';
import { CelularResponsavelService } from './celular-responsavel.service';

describe('CelularResponsavelController', () => {
  let controller: CelularResponsavelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CelularResponsavelController],
      providers: [CelularResponsavelService],
    }).compile();

    controller = module.get<CelularResponsavelController>(CelularResponsavelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
