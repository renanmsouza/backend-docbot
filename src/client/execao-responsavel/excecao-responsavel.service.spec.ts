import { Test, TestingModule } from '@nestjs/testing';
import { ExcecaoResponsavelService } from './excecao-responsavel.service';

describe('ExcecaoResponsavelService', () => {
  let service: ExcecaoResponsavelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExcecaoResponsavelService],
    }).compile();

    service = module.get<ExcecaoResponsavelService>(ExcecaoResponsavelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
