require('dotenv').config();

export const config = {
  MYSQL: {
    HOST: process.env.MYSQL_HOST,
    PORT: Number(process.env.MYSQL_PORT),
    USER: process.env.MYSQL_USER,
    PASS: process.env.MYSQL_PASS,
    DB_NAME: process.env.MYSQL_DB_NAME,
  },
  oneSignal: {
    appId: process.env.APP_ID,
    restKey: process.env.REST_KEY,
  },
  auth: {
    secretOrKey: process.env.JWT_SECRET_KEY,
    accessTokenExpiredIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
    refreshTokenExpiredIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  },

  appName: process.env.APP_NAME,
  upload: {
    AWS_S3_DOMAIN: process.env.AWS_S3_DOMAIN,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    region: process.env.AWS_S3_REGION,
    bucket: process.env.AWS_S3_BUCKET,
    /** List thumb '' is origin image */
    thumbs: ['', ...process.env.AWS_THUMBS.split(' ')],
  },
};

export interface IS3Upload {
  AWS_S3_DOMAIN: string;
  secretAccessKey: string;
  accessKeyId: string;
  region: string;
  bucket: string;
  thumbs: string[];
}

export interface IConfigAuth {
  secretOrKey: string;
  accessTokenExpiredIn: string;
  refreshTokenExpiredIn: string;
}

export interface IConfig {
  upload: IS3Upload;
  auth: IConfigAuth;
}
