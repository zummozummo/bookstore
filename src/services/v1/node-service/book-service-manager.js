import AppError from '../../../utils/errors.js';
import errorConstants from '../../../utils/error-constants.js';
import { Book, User, Order, Bookstore } from '../../../models/store-model.js';

const bookstore = new Bookstore();

class BooksServiceManager {
  createBook({ id, title, author, price }) {
    // Check if the book ID already exists
    if (bookstore.isBookIdExists(id)) {
      throw new AppError(errorConstants.E_CONFLICTIN_DATA, {
        message: 'book id alreay exist',
      });
    }
    const book = new Book(id, title, author, price);
    bookstore.addBook(book);
    return book;
  }

  getBooks() {
    return bookstore.listBooks();
  }
}

class UserServiceManager {
  createUser({ id, name, email }) {
    // Check if the user ID already exists
    if (bookstore.isUserExists(id)) {
      throw new AppError(errorConstants.E_CONFLICTIN_DATA, {
        message: 'User ID already exists',
      });
    }
    const user = new User(id, name, email);
    bookstore.registerUser(user);
    return user;
  }

  getUsers() {
    return bookstore.listUsers();
  }

  addToCart(userId, bookId) {
    const user = bookstore.users.find((u) => u.id === userId);
    if (!user) {
      throw new AppError(errorConstants.E_NOT_FOUND, { message: 'User not found' });
    }

    const book = bookstore.books.find((b) => b.id === bookId);
    if (!book) {
      throw new AppError(errorConstants.E_NOT_FOUND, { message: 'Book not found' });
    }

    user.addToCart(book);
    return user.cart;
  }

  placeOrder(userId) {
    const user = bookstore.users.find((u) => u.id === userId);
    if (!user) {
      throw new AppError(errorConstants.E_NOT_FOUND, { message: 'User not found' });
    }

    const order = bookstore.placeOrder(user);
    return order;
  }
}

const booksServiceManager = new BooksServiceManager();
const userServiceManager = new UserServiceManager();
export { booksServiceManager, userServiceManager };
