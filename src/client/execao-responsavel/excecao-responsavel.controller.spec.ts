import { Test, TestingModule } from '@nestjs/testing';
import { ExcecaoResponsavelController } from './excecao-responsavel.controller';
import { ExcecaoResponsavelService } from './excecao-responsavel.service';

describe('ExcecaoResponsavelController', () => {
  let controller: ExcecaoResponsavelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcecaoResponsavelController],
      providers: [ExcecaoResponsavelService],
    }).compile();

    controller = module.get<ExcecaoResponsavelController>(ExcecaoResponsavelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
