import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";
import Unit from "./Unit";

import config from "../config";

const { BUILDING_FEEDING_INTERVAL } = config;

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
			defaultValue: BUILDING_FEEDING_INTERVAL,
		},
	},
	{ sequelize, tableName: "building" }
);

Building.hasMany(Unit, { foreignKey: "buildingId", onDelete: "RESTRICT" });

export default Building;
