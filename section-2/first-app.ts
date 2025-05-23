// String, number boolean

let userName = 'Paul';

userName = 'Paul';

let userAge = 34;

let isValid = true;

// Union type
// let userID: string | number = 'abc1';
// userID = 123;

// Could also do this, using a custom type
type StringOrNum = string | number;
let userID: StringOrNum = 'abc1';
userID = 123;

// Still can't do this
// userID = true;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// Object type
let user: User;

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc',
};

// Array type
// One way
// let hobbies: Array<string>;

let hobbies: string[]; // number[];, boolean[];

hobbies = ['sports', 'cooking', 'reading'];

// Functions
// function add(a: number, b: number): void {
//   const result = a + b;
//   console.log(result);
// }

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// Inferred return
// function add(a: number, b: number) {
//   const result = a + b;
//   return result;
// }

// Function value type example
// function calculate(
//   a: number,
//   b: number,
//   calcFn: (a: number, b: number) => number
// ) {
//   return calcFn(a, b);
// }

// How it's used.
// calculate(1, 2, add);

// Custom types
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  return calcFn(a, b);
}

// Most common use case for the interface keyword is object types
interface Credentials {
  password: string;
  email: string;
}

// Interfaces are also extendable (used a lot in libraries)
// interface Credentials {
//   mode: string;
// }

let creds: Credentials;
creds = {
  password: 'password',
  email: 'test@gmail.com',
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string; // Can add other type definitions
}

function login(credentials: Credentials) {}

/**
 * This works because TS knows the AuthCredentials class
 * will always have the Credentials valid object with at least
 * the email and password wanted by the login
 */
login(new AuthCredentials());

/*------------------------------------------------ */
// 21. Merging Types
/*------------------------------------------------ */

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;
// admin = {
//   permissions: ['login'],
//   userName: 'Max',
// };

/*------------------------------------------------ */
// 21. Merging interfaces
/*------------------------------------------------ */

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;
admin = {
  permissions: ['login'],
  userName: 'Max',
};
