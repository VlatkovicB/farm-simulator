import { HttpCode } from "../enums/HttpCodes";

export default abstract class BaseError extends Error {
	description: string;
	code: HttpCode;

	constructor(description: string, message: string) {
		super(message);
		this.message = message;
		this.description = description;
	}
}
