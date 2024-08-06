import { logger } from '../../utils/logger.js';
import {
  booksServiceManager,
  userServiceManager,
} from '../../services/v1/node-service/book-service-manager.js';

class StoreController {
  static createBook(req) {
    try {
      const bookData = req.body;
      const result = booksServiceManager.createBook(bookData);
      return result;
    } catch (error) {
      logger.error('[Node-Controller-createNode] Error creating Node: ', error);
      throw error;
    }
  }

  static getBooks(req) {
    try {
      const result = booksServiceManager.getBooks();
      return result;
    } catch (error) {
      logger.error('[Node-Controller-createNode] Error creating Node: ', error);
      throw error;
    }
  }

  // User-related methods
  static createUser(req) {
    try {
      const userData = req.body;
      const result = userServiceManager.createUser(userData);
      return result;
    } catch (error) {
      logger.error('[StoreController-createUser] Error creating user: ', error);
      throw error;
    }
  }

  static getUsers(req) {
    try {
      const result = userServiceManager.getUsers();
      return result;
    } catch (error) {
      logger.error('[StoreController-getUsers] Error fetching users: ', error);
      throw error;
    }
  }

  static addToCart(req) {
    try {
      const { userId } = req.params;
      const { bookId } = req.body;
      const result = userServiceManager.addToCart(userId, bookId);
      return result;
    } catch (error) {
      logger.error('[StoreController-addToCart] Error adding to cart: ', error);
      throw error;
    }
  }

  static placeOrder(req) {
    try {
      const { userId } = req.params;
      const orderData = req.body;
      const result = userServiceManager.placeOrder(userId, orderData);
      return result;
    } catch (error) {
      logger.error('[StoreController-placeOrder] Error placing order: ', error);
      throw error;
    }
  }
}

export default StoreController;
