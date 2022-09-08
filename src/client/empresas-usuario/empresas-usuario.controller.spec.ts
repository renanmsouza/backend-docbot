import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasUsuarioController } from './empresas-usuario.controller';
import { EmpresasUsuarioService } from './empresas-usuario.service';

describe('EmpresasUsuarioController', () => {
  let controller: EmpresasUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpresasUsuarioController],
      providers: [EmpresasUsuarioService],
    }).compile();

    controller = module.get<EmpresasUsuarioController>(EmpresasUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
