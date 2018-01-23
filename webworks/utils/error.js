class HttpError extends Error {
  constructor() {
    super();
  }
}

class NotFoundError extends HttpError {
  constructor(msg = '') {
    super();
    Error.captureStackTrace(this, NotFoundError);
    this.statusCode = 404;
    this.message = msg;
    this.name = 'Not Found Page';
  }
}

module.exports = {
  NotFoundError
}