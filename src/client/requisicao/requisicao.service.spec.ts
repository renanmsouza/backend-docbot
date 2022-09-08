import { Test, TestingModule } from '@nestjs/testing';
import { RequisicaoService } from './requisicao.service';

describe('RequisicaoService', () => {
  let service: RequisicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequisicaoService],
    }).compile();

    service = module.get<RequisicaoService>(RequisicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
