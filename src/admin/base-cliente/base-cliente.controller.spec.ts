import { Test, TestingModule } from '@nestjs/testing';
import { BaseClienteController } from './base-cliente.controller';
import { BaseClienteService } from './base-cliente.service';

describe('BaseClienteController', () => {
  let controller: BaseClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseClienteController],
      providers: [BaseClienteService],
    }).compile();

    controller = module.get<BaseClienteController>(BaseClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
