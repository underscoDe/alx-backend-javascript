export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](val) {
    if (val === 'number') return this._size;
    if (val === 'string') return this._location;
    return this;
  }
}
