import fs from "fs";

console.log(fs);

// SINGLE RESPONSIBILITY PRINCIPLE: A class should only have one task to do. For example, if you have a class that can fly, you should not add a method that can swim. Instead, you should create a new class that can swim. This way, you can reuse the class that can fly without modifying it.

// OPEN-CLOSED-PRINCIPLE: A class should be open for extension but closed for modification. Which means that a class should be able to extends its set of operations without modifying the class itself. To achieve this, we can use inheritance, composition, and dependency injection. You add atomic behavior. For example, if you have a class that can fly, you can add a class that can swim without modifying the class that can fly.

// LISKOV SUBSTITUTION PRINCIPLE: A class should be able to be replaced by its subclass without changing the behavior of the system. You can replace a class with its subclass without breaking the code. For example, if you have a class that can fly, you can replace it with a class that can fly and swim without breaking the code.

// SEGRAGATION PRINCIPLE: Interface should only do 1 thing, and the class that implements the interface should only implement the methods that it needs. You can have multiple interfaces for a class. For example, you can have an interface for a class that can fly, and another interface for a class that can swim. You can have a class that implements both interfaces.

// DEPENDENCY INVERSION PRINCIPLE: High-level modules should not depend on low-level modules. For example, a class that uses a database should not depend on the database itself. Instead, it should depend on an interface that the database implements. This way, you can change the database without changing the class that uses it. "Depending on abstractions, not on concretions."
