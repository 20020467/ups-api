import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { LoggerService } from 'src/logger/logger.service';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private loggerService: LoggerService,
  ) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg =
      exception instanceof HttpException
        ? exception['response']['message']
        : 'Internal Server Error';

    this.loggerService.error(msg);

    const reponseBody = {
      statuscode: status,
      message: msg,
    };

    httpAdapter.reply(ctx.getResponse(), reponseBody, status);
  }
}
