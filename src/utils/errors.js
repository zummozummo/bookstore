import errors from './error-constants.js';

/**
 *
 * Usage :
 * import CustomError from '../utils/errors'
 * import errConstants from '../utils/errConstants';
 * throw new CustomError(errConstants.E_UNAUTHORIZED);
 *
 */
class AppError extends Error {
  constructor(code, errorInfo = {}) {
    const message = errorInfo.message ? errorInfo.message : code.message;
    super(message);
    this.error = errors[code.code];
    this.message = message;
    this.code = code.code;
    this.responseCode = code.responseCode;
    this.errorInfo = errorInfo;
  }
}

export default AppError;
