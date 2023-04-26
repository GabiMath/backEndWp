"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWpMessageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_wp_message_dto_1 = require("./create-wp-message.dto");
class UpdateWpMessageDto extends (0, mapped_types_1.PartialType)(create_wp_message_dto_1.CreateWpMessageDto) {
}
exports.UpdateWpMessageDto = UpdateWpMessageDto;
//# sourceMappingURL=update-wp-message.dto.js.map