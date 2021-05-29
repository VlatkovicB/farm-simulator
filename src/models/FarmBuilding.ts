import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";
import FarmUnit from "./FarmUnit";

class FarmBuilding extends Model {}

FarmBuilding.init(
	{
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		feedingInterval: {
			type: DataType.INTEGER,
			defaultValue: 60,
			allowNull: false,
		},
	},
	{ sequelize, tableName: "farmBuilding" }
);

FarmBuilding.hasMany(FarmUnit);

export default FarmBuilding;
