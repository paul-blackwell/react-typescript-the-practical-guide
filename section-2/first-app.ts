// String, number boolean

let userName = 'Paul';

userName = 'Paul';

let userAge = 34;

let isValid = true;

// Union type
let userID: string | number = 'abc1';
userID = 123;

// Still can't do this
// userID = true;

// Object type
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc',
};

// Array type
// One way
// let hobbies: Array<string>;

let hobbies: string[];

hobbies = ['sports', 'cooking', 'reading'];
