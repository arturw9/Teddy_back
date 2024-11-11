import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Permite o frontend rodando na porta 3001
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
    credentials: true, // Se necessário para enviar cookies ou cabeçalhos de autorização
  });

  // Configuração do ValidationPipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
