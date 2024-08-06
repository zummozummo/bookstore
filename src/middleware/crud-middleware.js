import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger.js';
import responseManager from '../common/response-manager.js';
import AppError from '../utils/errors.js';
import { auth } from '../config/app-config.js';
import errorConstants from '../utils/error-constants.js';

class Crudmiddlewares {
  static authenticateAsymmetricKeys(req, res, _next) {
    try {
      if (!req.headers?.authorization) throw new Error('Missing authorization');
      const token = req.headers?.authorization.split(' ')[1];

      if (!token) throw new Error('Not a bearer token');
      const decoded = jwt.verify(token, auth.token);
      // const decoded = jwt.verify(token,auth.token, 'base64').toString('utf8');
      req.tokenData = decoded;
      return _next();
    } catch (error) {
      logger.error(`[crudmiddlewares-authenticate] ERROR `, error);
      return responseManager.sendErrorResponse(res, new AppError(errorConstants.E_UNAUTHORIZED));
    }
  }
}

export default Crudmiddlewares;
