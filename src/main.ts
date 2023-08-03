import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { CustomLogger } from 'libs/core/src/logging/logging.service';
import { AppExceptionFilter } from './exceptionFilter/AppExceptionFilter';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  const httpAdapter = app.get(HttpAdapterHost);
  app.useLogger(new CustomLogger());
  const logger = new Logger();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useGlobalFilters(
    new AppExceptionFilter(httpAdapter, new LoggerService()),
  );
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    logger.log(`Server running on port: ${port}`);
  });
}
bootstrap();
