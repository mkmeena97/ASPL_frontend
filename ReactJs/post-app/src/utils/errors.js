export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.status = 404;
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.status = 401;
  }
}