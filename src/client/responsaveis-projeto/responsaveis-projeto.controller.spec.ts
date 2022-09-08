import { Test, TestingModule } from '@nestjs/testing';
import { ResponsaveisProjetoController } from './responsaveis-projeto.controller';
import { ResponsaveisProjetoService } from './responsaveis-projeto.service';

describe('ResponsaveisProjetoController', () => {
  let controller: ResponsaveisProjetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsaveisProjetoController],
      providers: [ResponsaveisProjetoService],
    }).compile();

    controller = module.get<ResponsaveisProjetoController>(ResponsaveisProjetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
