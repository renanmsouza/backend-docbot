import { Test, TestingModule } from '@nestjs/testing';
import { EmailResponsavelService } from './email-responsavel.service';

describe('EmailResponsavelService', () => {
  let service: EmailResponsavelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailResponsavelService],
    }).compile();

    service = module.get<EmailResponsavelService>(EmailResponsavelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
