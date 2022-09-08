import { Test, TestingModule } from '@nestjs/testing';
import { GrupoContatoService } from './grupo-contato.service';

describe('GrupoContatoService', () => {
  let service: GrupoContatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrupoContatoService],
    }).compile();

    service = module.get<GrupoContatoService>(GrupoContatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
