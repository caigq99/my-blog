import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Admin example')
    .setDescription('The admin API description')
    .setVersion('1.0')
    .addTag('admin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('admin-api-docs', app, document);

  // Use global validate pipe
  app.useGlobalPipes(
    new ValidationPipe({
      // Enable validation error message
      transform: true,
      // Enable whitelist
      whitelist: true,
    }),
  );

  // Enable CORS
  app.enableCors();

  // Start the app
  const port = process.env.port ?? 3000;
  await app.listen(port, () => {
    console.log(`Admin service is running on http://localhost:${port}`);
    console.log(
      `Swagger docs is running on http://localhost:${port}/admin-api-docs`,
    );
  });
}
bootstrap();
