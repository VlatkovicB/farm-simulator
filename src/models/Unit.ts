import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";

import config from "../config";

const { UNIT_FEEDING_INTERVAL, HP } = config.app;

interface UnitAttributes {
	name: string;
	feedingInterval: number;
	hp: number;
	buildingId: number;
	lastFed: Date;
	alive: boolean;
}

class Unit extends Model implements UnitAttributes {
	name: string;
	feedingInterval: number;
	hp: number;
	buildingId: number;
	lastFed: Date;
	alive: boolean;
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
		alive: {
			type: DataType.BOOLEAN,
		},
	},
	{ sequelize, tableName: "unit" }
);

Unit.beforeCreate("before create", (unit) => {
	unit.hp = HP || Math.round(Math.random() * 50 + 50);
	unit.alive = true;
});

Unit.beforeUpdate("before update", (unit) => {
	if (unit.hp === 0) {
		unit.alive = false;
	}
});

export default Unit;
