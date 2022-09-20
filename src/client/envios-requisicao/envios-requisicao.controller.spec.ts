import { Test, TestingModule } from '@nestjs/testing';
import { EnviosRequisicaoController } from './envios-requisicao.controller';
import { EnviosRequisicaoService } from './envios-requisicao.service';

describe('EnviosRequisicaoController', () => {
  let controller: EnviosRequisicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnviosRequisicaoController],
      providers: [EnviosRequisicaoService],
    }).compile();

    controller = module.get<EnviosRequisicaoController>(EnviosRequisicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
