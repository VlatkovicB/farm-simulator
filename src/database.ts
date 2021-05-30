import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(
	process.env.DB_URL || "postgres://postgres:@localhost:5432/farm-simulator"
);

export default sequelize;
