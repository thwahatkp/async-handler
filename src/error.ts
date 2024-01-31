import { NextFunction, Request, Response } from "express";
import ErrorHandler from "./errorHandler.js";
import { getReasonPhrase } from "http-status-codes";

interface TypeResponse {
  success: boolean;
  code: number;
  status: string;
  message: string;
  data?: string | number | null;
}

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  // mongodb id error
  if (err.name === "CastError") {
    const message = `Resource Not Found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // wrong jwt error
  if (err.code === "JsonWebTokenError") {
    const message = "JWT Error";
    err = new ErrorHandler(message, 400);
  }

  // jwt expire error
  if (err.code === "JsonWebTokenError") {
    const message = "JWT is Expired";
    err = new ErrorHandler(message, 400);
  }

  const response: TypeResponse = {
    success: false,
    code: err.statusCode,
    status: getReasonPhrase(err.statusCode),
    message: err.message,
  };

  if (err.data) {
    response.data = err.data;
  }

  res.status(err.statusCode).json(response);
};
