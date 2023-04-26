import { Module } from '@nestjs/common';
import { WpMessageService } from './wp-message.service';
import { WpMessageController } from './wp-message.controller';

@Module({
  controllers: [WpMessageController],
  providers: [WpMessageService]
})
export class WpMessageModule {}
