import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasUsuarioService } from './empresas-usuario.service';

describe('EmpresasUsuarioService', () => {
  let service: EmpresasUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasUsuarioService],
    }).compile();

    service = module.get<EmpresasUsuarioService>(EmpresasUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
