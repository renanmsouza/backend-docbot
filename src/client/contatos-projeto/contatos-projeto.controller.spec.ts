import { Test, TestingModule } from '@nestjs/testing';
import { ContatosProjetoController } from './contatos-projeto.controller';
import { ContatosProjetoService } from './contatos-projeto.service';

describe('ContatosProjetoController', () => {
  let controller: ContatosProjetoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContatosProjetoController],
      providers: [ContatosProjetoService],
    }).compile();

    controller = module.get<ContatosProjetoController>(ContatosProjetoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
