# Introduction

TypeScript is a statically typed programming language which is aimed to solve unexpected behavior of JavaScript by providing type safety and additional features. It is a superset of JavaScript. TypeScript provides many ways to define types. `Union` and `Intersection` are very handy and powerful for defining types in TypeScript.

# Union

Unions are sued when a value can be either one single type among many types. A type that is defined as union means that the parameter can be either number or string or other. The primitive types are chained using pipe `|` symbol. Unions provides flexibility, type safety and cleaner code by handling variables or functions with multiple types, type checks at compile time and reducing the need for overly complex types. It represents OR logic, however, it is not like logical OR operator.

```TypeScript
type Status = "pending" | "success" | "failed";

function printSomething(id: number | string) {
  console.log(id);
}
```

# Intersection

Intersection is used to combine multiple types in to a single type. An object defined with this type must include all the properties from the types which were merged. To define intersection `&` operator is used. It is often useful for scenarios where someone needs to satisfy several type contracts simultaneously. It basically combines all the properties from both types. It represents AND logic, however, it is not like logical AND operator.

```TypeScript
type result = typeA & typeB;
```

# Practical Example of Union and Intersection

```TypeScript
type BaseEmployee = {
  id: number;
  name: string;
  age: number;
  salary: number;
}

type Engineer = BaseEmployee & {
  department: "civil" | "software" | "marine";
  experience: number;
}

type Manager = BaseEmployee & {
  shift: "morning" | "night";
  experience: number;
}

type Workers = Engineer | Manager;

const engineer: Workers = {
  id: 12,
  name: "Tamim Ishrak",
  age: 26,
  salary: 24000,
  department: "civil",
  experience: 1
}

const manager: Workers = {
  id: 3,
  name: "Sanjid",
  age: 36,
  salary: 40000,
  shift: "morning",
  experience: 2
}

const getDetails = (worker: Workers) => {
  console.log(worker);
}

getDetails(engineer);
getDetails(manager);
```