const multiplyValue = (value: number, multiplier?: number) => {
  if(multiplier == undefined) return value*2;
  return value*multiplier;
}




type OutputType = string | number | boolean | undefined;

const processInput = (value: string | number | boolean): OutputType => {
  if(typeof value === "string") return value.trim().toLowerCase();
  else if(typeof value === "number") return value*10;
  else if(typeof value === "boolean") {
    if(value) return "Active";
    else return "Inactive";
  }
}




const formatCoordinate = (value: readonly [number, number, string]): string => {
  const [lat, long, capital] = value;
  return `Location: ${capital} (${lat}, ${long})`;
}




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
}




const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  let res: Course[] = [];

  for(let x of courses) {
    if(x.students >= minStudents && x.isPublished) {
      res.push(x);
    }
  }

  return res;
}




interface User {
  id: number;
  name: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  let result = []
  for (let item of items)  {
    result.push(item[key]);
  }
  return result;
}




class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}




const validateAgeAsync = async (age: number): Promise<string> => {
  let result = new Promise<string>((resolve, reject) => {
    if(age < 18) reject(new Error("Access Denied: Must be 18 or older"));
    else {
      setTimeout(() => {
        resolve("Access Granted")
      }, 1000);
    }
  });

  return result;
}
