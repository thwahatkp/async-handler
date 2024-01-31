class ErrorHandler extends Error {
  statusCode: number;
  data: object | null | undefined;
  constructor(message: string, statusCode: number, data?: object | null) {
    super(message);
    this.statusCode = statusCode;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;

// return new Response(null, { data: "working" }, 200);
// throw new ErrorHandler("Please enter a name", 400);
