import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";

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
			defaultValue: 10,
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
	unit.hp = Math.round(Math.random() * 50 + 50);
});

export default Unit;
