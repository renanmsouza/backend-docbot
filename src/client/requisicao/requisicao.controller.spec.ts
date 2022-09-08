import { Test, TestingModule } from '@nestjs/testing';
import { RequisicaoController } from './requisicao.controller';
import { RequisicaoService } from './requisicao.service';

describe('RequisicaoController', () => {
  let controller: RequisicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequisicaoController],
      providers: [RequisicaoService],
    }).compile();

    controller = module.get<RequisicaoController>(RequisicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
