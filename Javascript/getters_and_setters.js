// used to validate and modify values when reading and writing a property
// getter mathod makes a property readable
// setter method makes a property writable
  
class Rectangle {
    // use different internal variable while using getter and setter
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight;
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(5, "Pizza");

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
