# Introduction

TypeScript is a statically typed programming language and a superset of JavaScript with additional features. JavaScript is a dynamic language, which means it does not have any types or type safety for variables and this introduces many bugs and unexpected behavior of JavaScript. TypeScript is aimed to solve those problems by providing additional features which are used for writing type-safe code. Among many features of TypeScript, typr alias and interface are often used heavily for defining types.

# Type Alias vs Interface

Type alias and interfaces both can be used for defining types. Beginners in TypeScript often find it confusing when to choose what. Where the official TypeScript documentation suggests to use interfaces, but well reputated programmers like Matt Pocock suggests to use type alias by default.

## Type Alias

Type alias are just a name for type. It is mostly used to represent not only the primitives but object types as well. It is defined by using the `type` keyword. Type aliases can not be redeclared more than once. These are highly suitable for unions, tuples or primitive types. It can combine multiple types and does not support declaration merging. 

### **Example**

```TypeScript
type ID = string | number;
let employeeId: ID;
employeeID = 123;
employeeId = "ASDKJXCZ123123";
```

In the code above, the `ID` is declared as type alias which can be either a string or a number.

## Interface

Interfaces are usually heavily used for object oriented programming. However, interfaces in TypeScript can also be used to define the shape of an object. It supports extension and declaration merging. Interface does not support union, tuples. These can be declared by using `interface` keyword and can be implemented by classes using the `implements` keyword. Interfaces are ideal for defining object structures, APIs and class contracts. If multiple interfaces with same name is declared, it merges into one with all the properties which is referred as declaration merging.


### **Example**

```TypeScript
interface Student {
  id: string;
  name: string;
  age: number;
}

interface Student {
  gpa: number;
}

let student: Student;

student = {
  id: "abc-1231",
  name: "Tamim Ishrak",
  age: 24,
  gpa: 4.56
}
```

The code above demonstrates the concpet of declaration merging and also shows how interfaces can be used as a contract for defining objects.

# Which One to Choose?

Both of them are very powerful features that TypeScript provides. The official documentation suggests to interface over type alias. However, if there is a need for union, avoiding declaration merging and to combine multiple primitive types one should use `Type Alias`. On the other hand, if some one needs features like declaration merging, extension and defining a contract for objects, one should go for `Interface`.