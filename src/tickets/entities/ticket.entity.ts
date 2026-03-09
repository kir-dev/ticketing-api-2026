import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { TicketPhase } from '../../generated/prisma/client';

export class Ticket {
  @IsNumber()
  @Min(1)
  id: number = 0;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  name: string = '';

  @IsString()
  @IsOptional()
  @MaxLength(500)
  description: string | null = null;

  @IsEnum(TicketPhase)
  @ApiProperty({ enum: TicketPhase })
  ticketPhase: TicketPhase = TicketPhase.CREATED;

  @IsNumber()
  boardsId: number = 0;

  @IsDate()
  createdAt: Date = new Date();

  @IsDate()
  updatedAt: Date = new Date();
}
