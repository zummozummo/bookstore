import responseManager from '../common/response-manager.js';
import AppError from '../utils/errors.js';
import errors from '../utils/error-constants.js';
import ajvValidator from '../validators/ajv-validator.js';

const ajv = ajvValidator();

class Validator {
  validate(schema, schemaCacheKey = '') {
    return (req, res, next) => {
      const { method, route } = req;
      const { path } = route;
      const cacheKey = schemaCacheKey || `${method}-${path}`;
      let ajvValidate = ajv.getSchema(cacheKey);
      if (!ajvValidate) {
        ajv.addSchema(schema, cacheKey);
        ajvValidate = ajv.getSchema(cacheKey);
      }
      const valid = ajvValidate({ ...req.params, ...req.body, ...req.query });

      if (!valid) {
        const message = ajvValidate.errors.map((i) => i.message).join(', ');
        const errorObj = errors.E_INVALID_REQUEST_DATA;
        errorObj.message = message;
        return responseManager.sendErrorResponse(
          res,
          new AppError(errorObj, { message, rawErrors: ajvValidate.errors }),
        );
      }

      next();
    };
  }

  getAjvInstance() {
    return ajv;
  }
}

const validator = new Validator();
export default validator;
