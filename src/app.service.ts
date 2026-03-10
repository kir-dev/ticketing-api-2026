import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Ez a metódus vár egy 'name' paramétert, és visszatér a formázott szöveggel
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
