import { Test, TestingModule } from '@nestjs/testing';
import { ContatosGrupoService } from './contatos-grupo.service';

describe('ContatosGrupoService', () => {
  let service: ContatosGrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContatosGrupoService],
    }).compile();

    service = module.get<ContatosGrupoService>(ContatosGrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
