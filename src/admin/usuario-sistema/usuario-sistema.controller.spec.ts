import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioSistemaController } from './usuario-sistema.controller';
import { UsuarioSistemaService } from './usuario-sistema.service';

describe('UsuarioSistemaController', () => {
  let controller: UsuarioSistemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioSistemaController],
      providers: [UsuarioSistemaService],
    }).compile();

    controller = module.get<UsuarioSistemaController>(UsuarioSistemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
