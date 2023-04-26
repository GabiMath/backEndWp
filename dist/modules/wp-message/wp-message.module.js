"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WpMessageModule = void 0;
const common_1 = require("@nestjs/common");
const wp_message_service_1 = require("./wp-message.service");
const wp_message_controller_1 = require("./wp-message.controller");
let WpMessageModule = class WpMessageModule {
};
WpMessageModule = __decorate([
    (0, common_1.Module)({
        controllers: [wp_message_controller_1.WpMessageController],
        providers: [wp_message_service_1.WpMessageService]
    })
], WpMessageModule);
exports.WpMessageModule = WpMessageModule;
//# sourceMappingURL=wp-message.module.js.map