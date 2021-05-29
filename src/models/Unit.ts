import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";

interface UnitAttributes {
	name: string;
	feedingInterval: number;
	hp: number;
	buildingId: number;
}

class Unit extends Model implements UnitAttributes {
	name: string;
	feedingInterval: number;
	hp: number;
	buildingId: number;
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
