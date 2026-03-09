import { Injectable, OnModuleInit } from '@nestjs/common';
// Figyeld meg az importot: A saját generált mappánkból húzzuk be a klienst!
import { PrismaClient } from '../generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { Config } from '../config/configuration';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly config: ConfigService<Config, true>) {
    // Kiolvassuk a db url-t a korábban létrehozott ConfigService-ből
    const connectionString = config.get('database.url', { infer: true });

    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    // Inicializáljuk a gyorsabb SQLite adaptert
    const adapter = new PrismaBetterSqlite3({ url: connectionString });

    // Átadjuk az adaptert a szülő osztálynak (PrismaClient)
    super({ adapter });
  }

  // Ez a metódus automatikusan lefut, amikor a modul inicializálódik
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}
