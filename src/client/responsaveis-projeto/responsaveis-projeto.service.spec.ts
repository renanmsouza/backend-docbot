import { Test, TestingModule } from '@nestjs/testing';
import { ResponsaveisProjetoService } from './responsaveis-projeto.service';

describe('ResponsaveisProjetoService', () => {
  let service: ResponsaveisProjetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsaveisProjetoService],
    }).compile();

    service = module.get<ResponsaveisProjetoService>(ResponsaveisProjetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
