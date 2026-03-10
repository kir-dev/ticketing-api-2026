import { Controller, Get, Param } from '@nestjs/common';
// Egészítsük ki az eddigi importokat a Param dekorátorral, ami az URL paraméterek kezelésére szolgál
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // A ':name' egy dinamikus URL paramétert definiál
  @Get('hello/:name')
  getHello(@Param('name') name: string): string {
    // A @Param('name') dekorátor kiszedi az URL-ből a :name helyére írt értéket
    return this.appService.getHello(name);
  }
}
