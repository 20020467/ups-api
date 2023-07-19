import { config } from '../config/index';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Entities } from './entities';
import { Migrations } from './migrations';
require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: config.MYSQL.HOST,
  port: config.MYSQL.PORT,
  username: config.MYSQL.USER,
  password: config.MYSQL.PASS,
  database: config.MYSQL.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [...Entities],
  migrations: [...Migrations],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
