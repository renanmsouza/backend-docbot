import { Test, TestingModule } from '@nestjs/testing';
import { ContatosGrupoController } from './contatos-grupo.controller';
import { ContatosGrupoService } from './contatos-grupo.service';

describe('ContatosGrupoController', () => {
  let controller: ContatosGrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContatosGrupoController],
      providers: [ContatosGrupoService],
    }).compile();

    controller = module.get<ContatosGrupoController>(ContatosGrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
