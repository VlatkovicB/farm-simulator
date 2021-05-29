import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";

class FarmUnit extends Model {}

FarmUnit.init(
	{
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		feedingInterval: {
			type: DataType.INTEGER,
			defaultValue: 10,
			allowNull: false,
		},
		hp: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		alive: {
			type: DataType.BOOLEAN,
			allowNull: false,
		},
	},
	{ sequelize, tableName: "farmUnit" }
);

export default FarmUnit;
