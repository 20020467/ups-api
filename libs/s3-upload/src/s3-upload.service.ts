import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import * as Sharp from 'sharp';
import { S3uploadOptions } from './s3-upload.interface';
import { MODULE_OPTIONS_TOKEN } from './s3-upload.module-definition';
import { Express } from 'src/types/Express';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3UploadService {
  public S3Instance: AWS.S3;
  public s3ClientInstance: S3Client;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    public options: S3uploadOptions,
  ) {
    this.S3Instance = new AWS.S3({
      secretAccessKey: options.secretAccessKey,
      accessKeyId: options.accessKeyId,
      region: options.region,
    });
  }

  async putImageToS3(image: Express.Multer.File | any, fileName: string) {
    await this.S3Instance.putObject({
      ACL: 'public-read',
      Body: image.buffer,
      Bucket: this.options.bucket,
      ContentType: image.mimetype,
      Key: fileName,
    }).promise();

    const url = this.options.AWS_S3_DOMAIN + fileName;
    return url;
    // if (
    //   image.originalname.search(
    //     /\.(gif|jpe?g|tiff|png|webp|bmp|svg|HEIC|blob)$/gi,
    //   ) !== -1
    // ) {
    //   await this.generateThumb(image, fileName);
    //   const putObjects = image['thumbs'].map((item: any) => {
    //     console.log(item);
    //     const url = this.options.AWS_S3_DOMAIN + item.fileName;
    //     result.push(url);
    //     return this.S3Instance.putObject({
    //       ACL: 'public-read',
    //       Body: item.buffer,
    //       Bucket: this.options.bucket,
    //       ContentType: image.mimetype,
    //       Key: item.fileName,
    //     }).promise();
    //   });

    //   await Promise.all(putObjects);
    // }
    // return result;
  }

  async generateThumb(image: Express.Multer.File | any, fileName: string) {
    const thumbs = this.options.thumbs;

    for (let thumb of thumbs) {
      const [w, h] = thumb.split('x');
      let buffer = image.buffer;

      if (w && h) {
        buffer = await Sharp(image.buffer)
          .resize(Number(w), Number(h), {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .toBuffer();

        if (!image['thumbs'] || !Array.isArray(image['thumbs']))
          image['thumbs'] = [];

        image['thumbs'].push({
          fileName: `${w}x${h}/${fileName}`,
          buffer,
        });
      }
    }
  }
}
