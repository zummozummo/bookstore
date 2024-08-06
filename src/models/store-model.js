// book.js
class Book {
  constructor(id, title, author, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

// user.js
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(book) {
    this.cart.push(book);
  }

  emptyCart() {
    this.cart = [];
  }
}

// order.js
class Order {
  constructor(user, books) {
    this.user = user;
    this.books = books;
    this.totalCost = this.calculateTotalCost();
  }

  calculateTotalCost() {
    return this.books.reduce((total, book) => total + book.price, 0);
  }
}

// bookstore.js
class Bookstore {
  constructor() {
    this.books = [];
    this.users = [];
    this.orders = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    return this.books;
  }

  isBookIdExists(id) {
    return this.books.some((elem) => elem.id === id);
  }

  isUserExists(id) {
    return this.users.some((elem) => elem.id === id);
  }

  // Register a new user in the bookstore
  registerUser(user) {
    if (this.isUserExists(user.id)) {
      throw new Error('User with this ID already exists');
    }
    this.users.push(user);
  }

  // List all users in the bookstore
  listUsers() {
    return this.users;
  }

  placeOrder(user) {
    const order = new Order(user, user.cart);
    this.orders.push(order);
    user.emptyCart();
    return order;
  }
}
export { Book, User, Order, Bookstore };
