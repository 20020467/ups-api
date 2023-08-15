export interface S3uploadOptions {
  AWS_S3_DOMAIN: string;
  secretAccessKey: string;
  accessKeyId: string;
  region: string;
  bucket: string;
  thumbs: string[];
}
