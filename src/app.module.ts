import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WpMessageModule } from './modules/wp-message/wp-message.module';

@Module({
  imports: [WpMessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
