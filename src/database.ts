import { Sequelize } from "sequelize-typescript";

import config from "./config";
export interface DatabaseSettings {
	DB_SCHEMA: string;
	DB_USER: string;
	DB_PASSWORD: string;
	DB_HOST: string;
	DB_PORT: number;
}

const { DB_HOST, DB_PASSWORD, DB_PORT, DB_SCHEMA, DB_USER } = config.database;

const sequelize = new Sequelize(
	DB_SCHEMA || "farm-simulator",
	DB_USER || "postgres",
	DB_PASSWORD || "",
	{
		host: DB_HOST || "localhost",
		port: DB_PORT || 5432,
		dialect: "postgres",
	}
);

export default sequelize;
