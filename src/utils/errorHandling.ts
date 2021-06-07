import { NextFunction, Request, Response } from "express";
import BaseError from "../errors/BaseError";

export const errorHandler = (
	error: BaseError,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const { description, message, code } = error;

	response.status(code).send({
		description,
		message,
		code,
	});
};
