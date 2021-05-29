import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";
import Unit from "./Unit";

interface BuildingtAttributes {
	name: string;
	feedingInterval: number;
}

class Building extends Model implements BuildingtAttributes {
	name: string;
	feedingInterval: number;
}

Building.init(
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
	{ sequelize, tableName: "building" }
);

Building.hasMany(Unit, { foreignKey: "buildingId", onDelete: "RESTRICT" });

export default Building;
