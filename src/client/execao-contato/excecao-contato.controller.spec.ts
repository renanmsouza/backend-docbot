import { Test, TestingModule } from '@nestjs/testing';
import { ExecaoContatoController } from './excecao-contato.controller';
import { ExecaoContatoService } from './excecao-contato.service';

describe('ExecaoContatoController', () => {
  let controller: ExecaoContatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExecaoContatoController],
      providers: [ExecaoContatoService],
    }).compile();

    controller = module.get<ExecaoContatoController>(ExecaoContatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
