import { OmitType } from '@nestjs/mapped-types';
import { Board } from '../entities/board.entity';

export class CreateBoardDto extends OmitType(Board, [
  'id',
  'createdAt',
] as const) {}
