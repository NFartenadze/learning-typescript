interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase);
  }
}

let user1: Greetable;

user1 = {
  name: "Max",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("hi There - I am");
