/// <reference types="multer" />
import { WpMessageService } from './wp-message.service';
import { UpdateWpMessageDto } from './dto/update-wp-message.dto';
export declare class WpMessageController {
    private readonly wpMessageService;
    constructor(wpMessageService: WpMessageService);
    create(file: Express.Multer.File, body: any): void;
    getQr(): {
        message: String;
    };
    getStatus(): {
        message: string;
    };
    getSent(): {
        message: number;
    };
    getError(): {
        message: any[];
    };
    findOne(id: string): string;
    update(id: string, updateWpMessageDto: UpdateWpMessageDto): string;
    remove(id: string): string;
}
