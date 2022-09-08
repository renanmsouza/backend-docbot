import { Test, TestingModule } from '@nestjs/testing';
import { EmailContatoService } from './email-contato.service';

describe('EmailContatoService', () => {
  let service: EmailContatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailContatoService],
    }).compile();

    service = module.get<EmailContatoService>(EmailContatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
