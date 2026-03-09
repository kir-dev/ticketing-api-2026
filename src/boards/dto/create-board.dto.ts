import { OmitType } from '@nestjs/swagger';
import { Board } from '../entities/board.entity';

// Figyeld meg az "as const" kulcsszót a tömb végén!
export class CreateBoardDto extends OmitType(Board, [
  'id',
  'createdAt',
] as const) {}
