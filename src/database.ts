import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(
	process.env.DB_SCHEMA || "farm-simulator",
	process.env.DB_USER || "postgres",
	process.env.DB_PASSWORD || "",
	{
		host: process.env.DB_HOST || "localhost",
		port: parseInt(process.env.DB_PORT) || 5432,
		dialect: "postgres",
		dialectOptions: {
			ssl: process.env.DB_SSL == "true",
		},
	}
);

export default sequelize;
