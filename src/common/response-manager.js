import { logger } from '../utils/logger.js';

class ResponseManager {
  sendErrorResponse(res, err) {
    let response = {};
    const error = err;

    response = {
      code: err.code,
      message: err.message,
      data: {},
    };

    if (error.errorInfo) {
      response.data = { info: error.errorInfo };
    }

    // if (response.message) {
    //   response.message = response.message;
    // }

    logger.error(` Error : ${err.message} \n Err Stack: ${err.stack}`);
    res.status(err.responseCode);
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
    res.header('Access-Control-Allow-Origin', '*');
    res.send(response);
  }

  sendSuccessResponse(res, data, message = 'Success', options = {}) {
    const responseCode = options.responseCode ? options.responseCode : 200;
    const response = {
      code: 'OK',
      data,
      message,
    };

    res.status(responseCode);
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
    res.header('Access-Control-Allow-Origin', '*');

    const additionalHeaders = options.headers || {};

    for (const headerKey in additionalHeaders) {
      if (additionalHeaders[headerKey]) {
        res.header(headerKey, additionalHeaders[headerKey]);
      }
    }

    if (!res.get('Content-Type')) {
      res.header('Content-Type', 'application/json');
    }

    res.send(response);
  }
}

const responseManager = new ResponseManager();
export default responseManager;
