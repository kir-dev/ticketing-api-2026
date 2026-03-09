import { OmitType } from '@nestjs/swagger';
import { Label } from '../entities/label.entity';

// Létrehozásnál az 'id'-t az adatbázis generálja, így azt kihagyjuk
export class CreateLabelDto extends OmitType(Label, ['id'] as const) {}
