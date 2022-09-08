import { Test, TestingModule } from '@nestjs/testing';
import { CelularContatoService } from './celular-contato.service';

describe('CelularContatoService', () => {
  let service: CelularContatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CelularContatoService],
    }).compile();

    service = module.get<CelularContatoService>(CelularContatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
