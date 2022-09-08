import { Test, TestingModule } from '@nestjs/testing';
import { BaseClienteService } from './base-cliente.service';

describe('BaseClienteService', () => {
  let service: BaseClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseClienteService],
    }).compile();

    service = module.get<BaseClienteService>(BaseClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
