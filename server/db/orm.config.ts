import { DataSource, DataSourceOptions } from "typeorm";
//import "dotenv/config";

export const dataSourceOptions:DataSourceOptions = {
	type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'nintendo27',
  database: 'koketka',
	entities: ["dist/**/entity/*.entity.js"],
  migrations: ["dist/db/migrations/*.js"],
	synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;