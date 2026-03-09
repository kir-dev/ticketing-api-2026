import { OmitType } from '@nestjs/mapped-types';
import { Ticket } from '../entities/ticket.entity';

export class CreateTicketDto extends OmitType(Ticket, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}
