"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalService = void 0;
const { Client } = require('whatsapp-web.js');
class GlobalService {
}
exports.GlobalService = GlobalService;
GlobalService.client = new Client({});
GlobalService.status = 'logout';
GlobalService.sent = 0;
GlobalService.error = [];
//# sourceMappingURL=wps.service.js.map