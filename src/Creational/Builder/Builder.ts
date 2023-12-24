// Gamma Categorization:
// Creational: deal with the creation of objects
// Structural: deal with the composition of classes or objects
// Behavioral: deal with the interaction between objects

// Builder Pattern is a creational pattern that let you build a complex object step by step. For example, if you want to build a house object,
// you will need a HouseBuider class to build the house object. The house builder will build the house object step by step by calling the necessary method to do that.
// You can also have concrete builder classes that implement the house builder class. For example, you can have a concrete builder class that builds a wooden house.
// This class will now how to call the HouseBuilder methods to build a wooden house.
// The goal is to separate the construction of a complex object from its representation. To avoid ugly constructors with a lot of parameters.
// https://refactoring.guru/design-patterns/builder

// Exercise, A builder to build a class with fluent interface. For example, if you have a class Person, you can use the builder to build the class Person.
class CodeBuilder {
  obj: any;
  className: string;
  constructor(className: string) {
    // todo
    this.obj = {};
    this.className = className;
  }

  addField(name: string) {
    // todo
    // reminder: we want a fluent interface
    this.obj[name] = undefined;
    return this;
  }

  toString() {
    // todo
    const fields = Object.keys(this.obj);
    return `class ${this.className} {\n
        constructor(${fields.join(", ")}) {
            ${fields
              .map((field) => `this.${field}=${field};`)
              .join("\n            ")}
        }
    }`;
  }
}

let cb = new CodeBuilder("Person");
cb.addField("name").addField("age");
console.log(cb.toString());
