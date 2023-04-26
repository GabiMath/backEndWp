import { PartialType } from '@nestjs/mapped-types';
import { CreateWpMessageDto } from './create-wp-message.dto';

export class UpdateWpMessageDto extends PartialType(CreateWpMessageDto) {}
