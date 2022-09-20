import { Test, TestingModule } from '@nestjs/testing';
import { ExcecaoGrupoService } from './excecao-grupo.service';

describe('ExcecaoGrupoService', () => {
  let service: ExcecaoGrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcecaoGrupoService],
    }).compile();

    service = module.get<ExcecaoGrupoService>(ExcecaoGrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
