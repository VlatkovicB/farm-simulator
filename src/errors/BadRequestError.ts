import { HttpCode } from "../enums/HttpCodes";
import BaseError from "./BaseError";

export default class BadRequestError extends BaseError {
	constructor(description: string, message = "Bad Request") {
		super(message, description);
		this.code = HttpCode.BAD_REQUEST;
	}
}
