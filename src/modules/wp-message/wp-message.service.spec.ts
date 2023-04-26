import { Test, TestingModule } from '@nestjs/testing';
import { WpMessageService } from './wp-message.service';

describe('WpMessageService', () => {
  let service: WpMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WpMessageService],
    }).compile();

    service = module.get<WpMessageService>(WpMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
