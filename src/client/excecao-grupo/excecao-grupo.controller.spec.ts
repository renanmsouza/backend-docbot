import { Test, TestingModule } from '@nestjs/testing';
import { ExcecaoGrupoController } from './excecao-grupo.controller';
import { ExcecaoGrupoService } from './excecao-grupo.service';

describe('ExcecaoGrupoController', () => {
  let controller: ExcecaoGrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExcecaoGrupoController],
      providers: [ExcecaoGrupoService],
    }).compile();

    controller = module.get<ExcecaoGrupoController>(ExcecaoGrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
