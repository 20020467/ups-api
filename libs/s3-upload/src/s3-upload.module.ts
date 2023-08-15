import { Module } from '@nestjs/common';
import { S3UploadService } from './s3-upload.service';
import { ConfigurableModuleClass } from './s3-upload.module-definition';

@Module({
  providers: [S3UploadService],
  exports: [S3UploadService],
})
export class S3UploadModule extends ConfigurableModuleClass {}
