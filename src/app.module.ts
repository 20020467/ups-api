import { InfoProductService } from './app/infoProduct/infoproduct.service';
import { InfoProductController } from './app/infoProduct/infoproduct.controller';
import { InfoProductModule } from './app/infoProduct/infoproduct.module';
import { FirmModule } from './app/firm/firm.module';
import { CategoryModule } from './app/categories/category.module';
import { ProductModule } from './app/product/product.module';
import { UserModule } from './app/user/user.module';
import { LoggerModule } from './logger/logger.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3UploadModule } from '@app/s3-upload';
import { IConfig, IConfigAuth, config } from './config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AllExceptionsFilter } from 'libs/core/src/filters/http-exception.filter';
import { JwtAuthenticationModule } from '@app/jwt-authentication';
import { JwtAuthenticationGuard } from '@app/jwt-authentication/jwt-authentication.guard';
import { TransformResponseInterceptor } from 'libs/core/src/interceptors/transform-res.interceptor';

@Module({
  imports: [
    InfoProductModule,
    FirmModule,
    CategoryModule,
    ProductModule,
    UserModule,
    LoggerModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
      cache: true,
    }),
    /* -------------------------------------------------------------------------- */
    /*                          Basic JWT Authentication                          */
    /* -------------------------------------------------------------------------- */
    JwtAuthenticationModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => {
        return {
          ...configService.get<IConfigAuth>('auth'),
        };
      },
      inject: [ConfigService],
    }),
    S3UploadModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => ({
        ...configService.get('upload'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthenticationGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    },
  ],
})
export class AppModule {}
