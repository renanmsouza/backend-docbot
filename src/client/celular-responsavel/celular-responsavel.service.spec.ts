import { Test, TestingModule } from '@nestjs/testing';
import { CelularResponsavelService } from './celular-responsavel.service';

describe('CelularResponsavelService', () => {
  let service: CelularResponsavelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CelularResponsavelService],
    }).compile();

    service = module.get<CelularResponsavelService>(CelularResponsavelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
