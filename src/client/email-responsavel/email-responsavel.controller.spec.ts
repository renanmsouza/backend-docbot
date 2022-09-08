import { Test, TestingModule } from '@nestjs/testing';
import { EmailResponsavelController } from './email-responsavel.controller';
import { EmailResponsavelService } from './email-responsavel.service';

describe('EmailResponsavelController', () => {
  let controller: EmailResponsavelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailResponsavelController],
      providers: [EmailResponsavelService],
    }).compile();

    controller = module.get<EmailResponsavelController>(EmailResponsavelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
