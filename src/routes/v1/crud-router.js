import express from 'express';
import booksController from '../../controller/v1/books-controller.js';
import routeHandlerV2 from '../../middleware/response.js';
import Crudmiddlewares from '../../middleware/crud-middleware.js';
import validator from '../../middleware/schema-validator.js';
import crudPayloadValidator from '../../validators/v1/crud-payload-validator.js';
import responseManager from '../../common/response-manager.js';

const crudRouter = express.Router();

// Health check route
crudRouter.get('/health', (req, res) => {
  responseManager.sendSuccessResponse(res, { health: 'ok' }, 'Health check success');
});

// crudRouter.use(Crudmiddlewares.authenticateAsymmetricKeys);
crudRouter.post('/books', routeHandlerV2(booksController.createBook));
crudRouter.get('/books', routeHandlerV2(booksController.getBooks));

crudRouter.post('/users', routeHandlerV2(booksController.createUser));
crudRouter.get('/users', routeHandlerV2(booksController.getUsers));
crudRouter.post('/users/:userId/cart', routeHandlerV2(booksController.addToCart));
crudRouter.post('/users/:userId/orders', routeHandlerV2(booksController.placeOrder));

export default crudRouter;
