class Response {
  message: string | null;
  data: object | null;
  statusCode: number;
  constructor(message: string | null, data: object | any, statusCode: number) {
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}

export default Response;
