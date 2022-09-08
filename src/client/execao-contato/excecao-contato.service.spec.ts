import { Test, TestingModule } from '@nestjs/testing';
import { ExcecaoContatoService } from './excecao-contato.service';

describe('ExecaoContatoService', () => {
  let service: ExcecaoContatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcecaoContatoService],
    }).compile();

    service = module.get<ExcecaoContatoService>(ExcecaoContatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
