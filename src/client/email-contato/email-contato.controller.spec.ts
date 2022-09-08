import { Test, TestingModule } from '@nestjs/testing';
import { EmailContatoController } from './email-contato.controller';
import { EmailContatoService } from './email-contato.service';

describe('EmailContatoController', () => {
  let controller: EmailContatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailContatoController],
      providers: [EmailContatoService],
    }).compile();

    controller = module.get<EmailContatoController>(EmailContatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
