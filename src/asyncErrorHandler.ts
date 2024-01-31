import { Request, Response, NextFunction } from "express";
import AppResponse from "./responseHandler";
import AppError from "./errorHandler";
import { getReasonPhrase } from "http-status-codes";
import { ApiResponse } from "./helper/types";
import { isNull } from "./helper";

const tryCatch = (errFunction: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await errFunction(req, res, next);
    if (result instanceof AppResponse) {
      ResponseHandler(res, result);
    }
    // else {
    //   next(new AppError("Invalid Response. Expected Response object.", 500));
    // }
    return;
  } catch (error) {
    return next(error);
  }
};

const ResponseHandler = (res: Response, result: ApiResponse) => {
  let response: { code: number; success: boolean; status: string; message?: string | null; data?: object } = {
    code: result.statusCode,
    success: true,
    status: getReasonPhrase(result.statusCode),
  };

  if (!isNull(result.message)) {
    response.message = result.message;
  }

  if (!isNull(result.data)) {
    response = { ...response, ...result.data };
  }

  res.status(result.statusCode).json(response);
};

export default tryCatch;
