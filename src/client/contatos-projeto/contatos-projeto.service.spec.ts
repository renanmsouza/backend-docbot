import { Test, TestingModule } from '@nestjs/testing';
import { ContatosProjetoService } from './contatos-projeto.service';

describe('ContatosProjetoService', () => {
  let service: ContatosProjetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContatosProjetoService],
    }).compile();

    service = module.get<ContatosProjetoService>(ContatosProjetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
