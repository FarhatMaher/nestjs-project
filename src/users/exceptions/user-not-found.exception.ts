export class UserNotFoundException extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, UserNotFoundException.prototype);
  }
}
