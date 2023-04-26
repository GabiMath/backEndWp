import { Injectable } from '@nestjs/common';
import { UpdateWpMessageDto } from './dto/update-wp-message.dto';
import * as xlsx from 'xlsx';
import { GlobalService } from 'src/utilities/wpsClient/wps.service';
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

@Injectable()
export class WpMessageService {
  create(file: Express.Multer.File, message: string) {
    const excelFile = xlsx.readFile(__dirname + '/file.xlsx')
    //console.log(excelFile)
    var sheet_name_list = excelFile.SheetNames;
    var body = {
      file: (Array.from(xlsx.utils.sheet_to_json(excelFile.Sheets[sheet_name_list[0]]).values())),
      message: message
    }
    GlobalService.client.emit('sendMessage', body)


    // const client = new Client();
    // client.on('qr', qr => {

    // });
    // client.on('ready', () => {
    //   console.log('Client is ready!');

    //   client.sendMessage()
    // });
    // //const excelFile = xlsx.readFile(file.path)
    // //console.log(file.)
    // client.initialize();
  }

  findAll() {
    return `This action returns all wpMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wpMessage`;
  }

  update(id: number, updateWpMessageDto: UpdateWpMessageDto) {
    return `This action updates a #${id} wpMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} wpMessage`;
  }
}
