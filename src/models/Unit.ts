import { DataType, Model } from "sequelize-typescript";
import sequelize from "../database";

import Config from "../config";
import UnitService from "../services/UnitService";

const unitFeedingInterval = Config.UNIT_FEEDING_INTERVAL;
const hp = Config.HP;

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

	loseHealth(): void {
		setTimeout(() => {
			if (this.alive) {
				this.hp -= 1;
				UnitService.update(this);
				this.loseHealth();
			}
		}, this.feedingInterval);
	}

	gainHealth(buildingInterval: number): void {
		setTimeout(() => {
			if (this.alive) {
				const amount = buildingInterval / this.feedingInterval / 2;
				UnitService.feedOne(this, amount);
				this.gainHealth(buildingInterval);
			}
		}, buildingInterval);
	}
}

Unit.init(
	{
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		feedingInterval: {
			type: DataType.INTEGER,
			defaultValue: unitFeedingInterval,
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
	unit.hp = hp || Math.round(Math.random() * 50 + 50);
	unit.alive = true;
});

Unit.beforeUpdate("before update", (unit) => {
	if (unit.hp === 0) {
		unit.alive = false;
	}
});

export default Unit;
