export class ValidationError extends Error {
  constructor(message = "Validation error") {
    super(message);
  }
}

export class BadRequestError extends Error {
  constructor(message = "Bad request") {
    super(message);
  }
}
