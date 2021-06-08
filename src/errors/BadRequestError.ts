import { HttpCode } from "../enums/HttpCodes";
import BaseError from "./BaseError";

export default class BadRequestError extends BaseError {
	constructor(description: string, message = "Bad Request") {
		super(description, message);
		this.code = HttpCode.BAD_REQUEST;
	}
}
