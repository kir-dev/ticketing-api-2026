import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @ApiBody({ type: CreateTicketDto })
  @ApiCreatedResponse({
    description: 'Successfully created ticket',
    type: Ticket,
  })
  @ApiNotFoundResponse({ description: 'No board exists with given id' })
  @ApiBadRequestResponse({ description: 'Could not create ticket' })
  create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  @ApiOkResponse({
    type: Ticket,
    isArray: true,
    description: 'All tickets',
  })
  findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Ticket })
  @ApiNotFoundResponse({ description: 'Ticket with given id not found' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Ticket> {
    return this.ticketsService.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateTicketDto })
  @ApiOkResponse({ type: Ticket })
  @ApiNotFoundResponse({ description: 'Ticket with given id not found' })
  @ApiBadRequestResponse({ description: 'Could not update ticket' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<Ticket> {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Ticket })
  @ApiNotFoundResponse({ description: 'Ticket with given id not found' })
  @ApiBadRequestResponse({ description: 'Could not delete ticket' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<Ticket> {
    return this.ticketsService.remove(id);
  }
}
