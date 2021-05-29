import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";

import config from "../config";

const { UNIT_FEEDING_INTERVAL, HP: hp } = config.app;

interface UnitAttributes {
	name: string;
	feedingInterval: number;
	hp: number;
	buildingId: number;
	lastFed: Date;
}

class Unit extends Model implements UnitAttributes {
	name: string;
	feedingInterval: number;
	hp: number;
	buildingId: number;
	lastFed: Date;
}

Unit.init(
	{
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		feedingInterval: {
			type: DataType.INTEGER,
			defaultValue: UNIT_FEEDING_INTERVAL,
		},
		lastFed: {
			type: DataType.DATE,
		},
		hp: {
			type: DataType.INTEGER,
		},
		buildingId: {
			type: DataType.INTEGER,
		},
	},
	{ sequelize, tableName: "unit" }
);

Unit.beforeCreate("updateHp", (unit) => {
	unit.hp = hp || Math.round(Math.random() * 50 + 50);
});

export default Unit;
