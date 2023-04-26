/// <reference types="multer" />
import { UpdateWpMessageDto } from './dto/update-wp-message.dto';
export declare class WpMessageService {
    create(file: Express.Multer.File, message: string): void;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWpMessageDto: UpdateWpMessageDto): string;
    remove(id: number): string;
}
