import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// A Nest CLI plugin (SWC használata esetén) automatikusan generálja ezt a fájlt fordításkor
import metadata from './metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // 1. Swagger konfiguráció építése
  const config = new DocumentBuilder()
    .setTitle('Ticketing API 2026')
    .setDescription('A hibajegy-kezelő rendszer API dokumentációja')
    .setVersion('1.0')
    .build();

  // 2. Plugin metaadatok betöltése
  // Ez ahhoz kell, hogy az SWC fordítóval együtt is működjön az automatikus típusfelismerés
  await SwaggerModule.loadPluginMetadata(metadata);

  // 3. A dokumentum legenerálása és csatolása az alkalmazáshoz
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  // A 'api' az URL útvonal, ahol elérhető lesz a Swagger UI
  SwaggerModule.setup('api', app, documentFactory);

  const port = process.env.PORT ?? 3000;
  console.log(`Nestjs is running on port ${port}`);
  await app.listen(port);
}

void bootstrap();
