"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalService = void 0;
const { Client } = require('whatsapp-web.js');
class GlobalService {
    static initClient() {
        this.client = new Client({});
    }
}
exports.GlobalService = GlobalService;
GlobalService.status = 'logout';
GlobalService.sent = 0;
GlobalService.error = [];
//# sourceMappingURL=wps.service.js.map