import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { WpMessageService } from './wp-message.service';
import { CreateWpMessageDto } from './dto/create-wp-message.dto';
import { UpdateWpMessageDto } from './dto/update-wp-message.dto';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { GlobalService } from 'src/utilities/wpsClient/wps.service';

@Controller('wp-message')
export class WpMessageController {
  constructor(private readonly wpMessageService: WpMessageService) { }

  @UseInterceptors(FileInterceptor('xlsx'))
  @Post()
  create(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log(body);
    
    return this.wpMessageService.create(file,body.message);
  }

  @Get('qr')
  getQr() {
    return { message: GlobalService.qr };
  }

  @Get('status')
  getStatus() {
    return { message: GlobalService.status };
  }
  @Get('sent')
  getSent() {
    return { message: GlobalService.sent };
  }
  @Get('error')
  getError() {
    return { message: GlobalService.error };
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wpMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWpMessageDto: UpdateWpMessageDto) {
    return this.wpMessageService.update(+id, updateWpMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wpMessageService.remove(+id);
  }
}
