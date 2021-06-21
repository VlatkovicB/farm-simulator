import { SequelizeScopeError } from "sequelize/types";
import { HttpCode } from "../enums/HttpCodes";

export default abstract class BaseError extends Error implements SequelizeScopeError{
	description: string;
	code: HttpCode;

	constructor(description: string, message: string) {
		super(message);
		this.message = message;
		this.description = description;
	}
}
