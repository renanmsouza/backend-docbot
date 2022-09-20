import { Test, TestingModule } from '@nestjs/testing';
import { EnviosRequisicaoService } from './envios-requisicao.service';

describe('EnviosRequisicaoService', () => {
  let service: EnviosRequisicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnviosRequisicaoService],
    }).compile();

    service = module.get<EnviosRequisicaoService>(EnviosRequisicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
