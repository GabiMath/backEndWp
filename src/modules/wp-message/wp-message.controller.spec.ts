import { Test, TestingModule } from '@nestjs/testing';
import { WpMessageController } from './wp-message.controller';
import { WpMessageService } from './wp-message.service';

describe('WpMessageController', () => {
  let controller: WpMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WpMessageController],
      providers: [WpMessageService],
    }).compile();

    controller = module.get<WpMessageController>(WpMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
