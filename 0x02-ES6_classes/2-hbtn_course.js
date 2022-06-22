/* eslint no-underscore-dangle: ["error", {"allow": ["_name", "_length", "_students"] }] */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    if (typeof Name === 'string') {
      this._name = Name;
    } else {
      throw new TypeError('Name must be a string');
    }
    this._name = Name;
  }

  get length() {
    return this._length;
  }

  set length(Length) {
    if (typeof Length === 'number') {
      this._length = Length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(Students) {
    if (typeof Students === 'object') {
      for (const student in Students) {
        if (typeof student !== 'string') {
          throw new TypeError('Student must be an array');
        }
      }
    } else {
      throw new TypeError('Student must be an array of strings');
    }
    this._students = Students;
  }
}
