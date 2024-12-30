import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  const port = process.env.port ?? 3000;
  await app.listen(port, () => {
    console.log(`Admin service is running on http://localhost:${port}`);
  });
}
bootstrap();
