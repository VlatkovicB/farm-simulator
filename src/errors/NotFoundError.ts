import { HttpCode } from "../enums/HttpCodes";
import BaseError from "./BaseError";

export default class NotFoundError extends BaseError {
	constructor(description: string, message = "Not Found") {
		super(message, description);
		this.code = HttpCode.NOT_FOUND;
	}
}
