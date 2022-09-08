import { Test, TestingModule } from '@nestjs/testing';
import { GrupoContatoController } from './grupo-contato.controller';
import { GrupoContatoService } from './grupo-contato.service';

describe('GrupoContatoController', () => {
  let controller: GrupoContatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrupoContatoController],
      providers: [GrupoContatoService],
    }).compile();

    controller = module.get<GrupoContatoController>(GrupoContatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
