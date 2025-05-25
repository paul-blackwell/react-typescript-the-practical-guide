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
// 22. Merging interfaces
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

/*------------------------------------------------ */
// 22. Being Specific With Literal Types
/*------------------------------------------------ */

// let role: 'admin' | 'user' | 'editor'; // 'admin', 'user', 'editor'

// role = 'admin';
// role = 'user';
// role = 'editor';
// role = 'abc'; // Shouldn't work

/*------------------------------------------------ */
// 23. Adding Type Guards
/*------------------------------------------------ */

// type Role = 'admin' | 'user' | 'editor';

// let role: Role;

// function performAction(action: string, role: Role) {
//   if (role === 'admin' && typeof action === 'string') {
//     // ...
//   }
// }

/*------------------------------------------------ */
// 24. Type Guards & Type Narrowing - A Closer Look
/*------------------------------------------------ */

/**
 * When using "Type Guards" (i.e., if statements
 * that check which concrete type is being used),
 * TypeScript performs so-called "Type Narrowing".
 *
 * This means that TypeScript is able to narrow a
 * broader type down to a more specific type.
 */

// Consider this example:
function combine(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  return `${a} ${b}`;
}

/**
 * In this example, inside the if statement, TypeScript
 * narrows the types of a & b from "either a number or a
 * string" down to "definitely a number" - because that's
 * what the condition of the if check says (and TypeScript
 * "understands" that).
 *
 * After the if statement, TypeScript
 * understands that a and b are again either a number or a
 * string"  because we only make it into the if statement if both are of type number. The type therefore is broader again.
 */

/**
 * Important: You can NOT check if a value meets the definition
 * of a custom type (type alias) or interface type. These are
 * TypeScript-specific features for which no JavaScript
 * equivalent exists. Therefore, since those if checks
 * need to run at runtime, you can't write any code that
 * would be able to check for those types at runtime.
 */

/*------------------------------------------------ */
// 25. Making Sense Of Generic Types
/*------------------------------------------------ */

type Role = 'admin' | 'user' | 'editor';

// Example of a built in generic type
let role: Array<Role>;
role = ['admin', 'editor'];

// Or could to this
// let role: Role[];
// role = ['admin', 'editor'];

// Custom generic type
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push[data];
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {
    // ...
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

// const newUser = merge<{ name: string }, { age: number }>(
//   { name: 'max' },
//   { age: 34 }
// );

// But can also infer
const newUser = merge({ name: 'max' }, { age: 34 });
