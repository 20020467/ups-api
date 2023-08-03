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

@Module({
  imports: [
    InfoProductModule,
    FirmModule,
    CategoryModule,
    ProductModule,
    UserModule,
    LoggerModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
