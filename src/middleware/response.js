import ResponseManager from '../common/response-manager.js';
import errorConstants from '../utils/error-constants.js';
import AppError from '../utils/errors.js';

function routeHandlerV2(handler) {
  return async (req, res) => {
    try {
      const resp = await handler(req);
      // send last handler result in the response in api
      ResponseManager.sendSuccessResponse(res, resp);
    } catch (error) {
      if (error instanceof AppError) {
        ResponseManager.sendErrorResponse(res, error);
      } else {
        const err = new AppError(errorConstants.E_INTERNAL_SERVER_ERROR);
        ResponseManager.sendErrorResponse(res, err);
      }
    }
  };
}

export default routeHandlerV2;
