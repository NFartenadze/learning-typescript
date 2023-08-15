function Logger(logString: string) {
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGIN - PERSON")
@WithTemplate("<h1>Template</h1>", "app")
class PersonWithDecorator {
  name = "Max";
  constructor() {
    console.log("Hello world");
  }
}

const person = new PersonWithDecorator();
console.log(person);
