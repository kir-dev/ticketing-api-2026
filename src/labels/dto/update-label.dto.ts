import { PartialType } from '@nestjs/swagger';
import { CreateLabelDto } from './create-label.dto';

// Frissítésnél minden mező opcionálissá válik
export class UpdateLabelDto extends PartialType(CreateLabelDto) {}
