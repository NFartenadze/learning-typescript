type AddFn = (a: number, b: number) => number;
interface AddFunc {
  (a: number, b: number): number;
}

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

// interface Person extends Greetable {
//   firstName: string;
//   lastName: string;
//   age: string;
//   gender?: "Male" | "Female" | "Optimus Prime";
// }

// class Person implements Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   greet(phrase: string): void {
//     console.log(phrase);
//   }
// }

let user1: Greetable;

user1 = {
  name: "Max",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("hi There - I am");
