import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { TicketsModule } from './tickets/tickets.module';
import { LabelsModule } from './labels/labels.module';

import configuration from './config/configuration';
import { CommonModule } from './common/common.module';
import { LoggerMiddleware } from './common/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    BoardsModule,
    TicketsModule,
    LabelsModule,
    CommonModule, // Itt adjuk hozzá a CommonModule-t!
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // A LoggerMiddleware-t minden ('*') útvonalra rákötjük
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
