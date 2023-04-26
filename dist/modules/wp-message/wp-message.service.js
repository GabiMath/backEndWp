"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WpMessageService = void 0;
const common_1 = require("@nestjs/common");
const xlsx = require("xlsx");
const wps_service_1 = require("../../utilities/wpsClient/wps.service");
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
let WpMessageService = class WpMessageService {
    create(file, message) {
        const excelFile = xlsx.readFile(__dirname + '/file.xlsx');
        var sheet_name_list = excelFile.SheetNames;
        var body = {
            file: (Array.from(xlsx.utils.sheet_to_json(excelFile.Sheets[sheet_name_list[0]]).values())),
            message: message
        };
        wps_service_1.GlobalService.client.emit('sendMessage', body);
    }
    findAll() {
        return `This action returns all wpMessage`;
    }
    findOne(id) {
        return `This action returns a #${id} wpMessage`;
    }
    update(id, updateWpMessageDto) {
        return `This action updates a #${id} wpMessage`;
    }
    remove(id) {
        return `This action removes a #${id} wpMessage`;
    }
};
WpMessageService = __decorate([
    (0, common_1.Injectable)()
], WpMessageService);
exports.WpMessageService = WpMessageService;
//# sourceMappingURL=wp-message.service.js.map