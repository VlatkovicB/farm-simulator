import { DataType, Model } from "sequelize-typescript";
import config from "../config";
import sequelize from "../database";
import UnitService from "../services/UnitService";
import Unit from "./Unit";


const buildingFeedingInterval = config.BUILDING_FEEDING_INTERVAL;

interface BuildingtAttributes {
	name: string;
	feedingInterval: number;
}

class Building extends Model implements BuildingtAttributes {
	name: string;
	feedingInterval: number;

	initiateFeeding(): void {
		setTimeout(async () => {
			const units = await UnitService.findByBuildingId(this.id);

			units.forEach((unit) => unit.gainHealth(this.feedingInterval));

			this.initiateFeeding();
		}, this.feedingInterval);
	}
}

Building.init(
	{
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		feedingInterval: {
			type: DataType.INTEGER,
			defaultValue: buildingFeedingInterval,
		},
	},
	{ sequelize, tableName: "building" }
);

Building.hasMany(Unit, { foreignKey: "buildingId", onDelete: "RESTRICT" });

export default Building;
