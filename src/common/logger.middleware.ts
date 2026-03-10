import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const start = Date.now(); // Eltároljuk a kérés kezdetének időpontját

    // Feliratkozunk a válasz 'finish' (befejezés) eseményére
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(
        `[${method}] ${originalUrl} - ${res.statusCode} - ${duration}ms`,
      );
    });

    // Továbbadjuk a vezérlést az alkalmazás többi részének
    next();
  }
}
