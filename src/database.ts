import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(process.env.DB_URL);

export default sequelize;
