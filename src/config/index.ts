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

  appName: process.env.APP_NAME,
};
