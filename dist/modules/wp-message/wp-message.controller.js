"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WpMessageController = void 0;
const common_1 = require("@nestjs/common");
const wp_message_service_1 = require("./wp-message.service");
const update_wp_message_dto_1 = require("./dto/update-wp-message.dto");
const platform_express_1 = require("@nestjs/platform-express");
const wps_service_1 = require("../../utilities/wpsClient/wps.service");
let WpMessageController = class WpMessageController {
    constructor(wpMessageService) {
        this.wpMessageService = wpMessageService;
    }
    create(file, body) {
        console.log(body);
        return this.wpMessageService.create(file, body.message);
    }
    async getQr() {
        return { message: wps_service_1.GlobalService.qr };
    }
    getStatus() {
        return { message: wps_service_1.GlobalService.status };
    }
    getSent() {
        return { message: wps_service_1.GlobalService.sent };
    }
    getError() {
        return { message: wps_service_1.GlobalService.error };
    }
    findOne(id) {
        return this.wpMessageService.findOne(+id);
    }
    update(id, updateWpMessageDto) {
        return this.wpMessageService.update(+id, updateWpMessageDto);
    }
    remove(id) {
        return this.wpMessageService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('xlsx')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('qr'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WpMessageController.prototype, "getQr", null);
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Get)('sent'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "getSent", null);
__decorate([
    (0, common_1.Get)('error'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "getError", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wp_message_dto_1.UpdateWpMessageDto]),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WpMessageController.prototype, "remove", null);
WpMessageController = __decorate([
    (0, common_1.Controller)('wp-message'),
    __metadata("design:paramtypes", [wp_message_service_1.WpMessageService])
], WpMessageController);
exports.WpMessageController = WpMessageController;
//# sourceMappingURL=wp-message.controller.js.map