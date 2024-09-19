# designPatterns
 
## Type of patterns

### Creational
* Factory pattern
* Abstract Factory pattern
* Builder
* Prototype
* [x] Singleton
### Structural
* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Flyweight
* Proxy
### Behavioral
* Chain of Responsibility
* Command
* Iterator
* Mediator
* Memento
* Observer
* State
* Strategy
* Template Method
* Visitor


## Singleton

#### What is the Singleton Design Pattern in JavaScript?
The Singleton Design Pattern in JavaScript is a design pattern that restricts the instantiation of a class to a single instance. This means that no matter how many times you try to create a new instance of the class, you will always get the same instance. This pattern is useful when exactly one object is needed to coordinate actions across the system. For example, if you have a logging system in your application, you might want to have only one instance of the logger to avoid inconsistencies in the log.

#### Cons

* Harder to test as we can't instantiate it inside a test multiple times
* Having a global state might lead to tight coupling between classes, less flexible code

#### Use cases

* Logging service
* Configuration manager
* Cache manager
* Database connection



####  References
* https://www.sitepoint.com/javascript-design-patterns-singleton/
* https://refactoring.guru/design-patterns/singleton
* https://www.patterns.dev/vanilla/singleton-pattern
