import { PersonInput } from "./interfaces/PersonInput";
import { BusinessPartner } from "./interfaces/BusinessPartner";
import { Contact } from "./interfaces/Contact";
import { Dog } from "./models/Dog";
import { Employee } from "./models/Employee";
import { Mail } from "./models/Mail";
import { Person } from "./models/Person";
import { UniversityEducation } from "./models/UniversityEducation";
import {
  format,
  getRandomElement,
  isNullOrEmpty,
} from "./utilities/StringUtils";
import { Stack } from "./models/Stack";
import { Pair } from "./interfaces/Pair";
import { List } from "./models/List";
import { IPerson } from "./interfaces/IPerson";
import { Printer } from "./interfaces/extending-multiple/Printer";
import { Dog1 } from "./interfaces/overriding-methods/Dog1";
import { AgriLoan } from "./models/AgriLoan";
import { Point } from "./models/Point";
import IPoint from "./interfaces/IPoint";
import { BankAccount } from "./models/BankAccount";
import { Employee1 } from "./models/Employee1";
import { Person as PersonWithGetterSetter } from "./models/getter-setter/Person";
import { Temperature } from "./models/getter-setter/Temperature";
import { Duck } from "./interfaces/Duck";
import { MallardDuck } from "./models/MallardDuck";
import { RubberDuck } from "./models/RubberDuck";
import { Driveable } from "./interfaces/Driveable";
import { Bus } from "./models/Bus";
import { Truck } from "./models/Truck";

// let message: string = "Hello, TypeScript!";

// let heading = document.createElement("h1");
// heading.textContent = message;

// document.body.appendChild(heading);

interface Product {
  id: number;
  name: string;
  price: number;
}

const showProduct = (name: string, price: number) => {
  console.log(`The product ${name} costs $${price}.`);
};
function getProduct(): Product {
  return {
    id: 1,
    name: "Awesome Gadget",
    price: 99.5,
  };
}

const product = getProduct();
showProduct(product.name, product.price);

// Section 2. Basic Types
console.log("Section 2. Basic Types");
// Arrays
let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

// Objects
let person1: {
  name: string;
  age: number;
};
person1 = {
  name: "John",
  age: 25,
};

// Function arguments & return types
let greeting: (name: string) => string;
greeting = function (name: string) {
  return `Hello, ${name}!`;
};
// greeting variable doesn’t match its function type.
// greeting = function () {
//     console.log('Hello');
// };

// TypeScript Boolean
let pending: boolean = true;
let notPending = !pending;
console.log(`Pending: ${pending}, Not Pending: ${notPending}`);

// Object Type
let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};
employee = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  jobTitle: "Software Engineer",
};
console.log(employee);

// Array type
let skills: string[] = [];
skills[0] = "JavaScript";
skills[1] = "TypeScript";
skills.push("Software Design");
console.log(`Skills: ${skills.join(", ")}`);

let numbers1: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers: ${numbers1.join(", ")}`);

let mixedArray = [1, "two", true];
let mixedArray1: (string | number | boolean)[] = [1, "two", true];
console.log(`Mixed Array: ${mixedArray1.join(", ")}`);

let powers = numbers1.map((num) => num * num);
console.log(`Powers: ${powers.join(", ")}`);

// Tuple type
let user: [number, string] = [1, "Alice"];
user = [1, "Bob"];
console.log(user);

let color: [number, number, number] = [255, 0, 0];

// For example, you can define an RGBA tuple with the optional alpha channel value:
// Note that the RGBA defines colors using the red, green, blue, and alpha models. The alpha specifies the opacity of the color.
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// TypeScript Enum
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
}
const request = {
  id: 1,
  status: ApprovalStatus.approved,
  description: "Please approve this request",
};
if (request.status === ApprovalStatus.approved) {
  console.log("Send email to the Applicant...");
}

// Any Type
let result: any;
result = "This can be a string";
console.log(result);
result = 42;
console.log(result);

const json = `{"latitude": 10.11, "longitude":12.12}`;
const currentLocation = JSON.parse(json);
console.log(currentLocation);

// Unknown Type
let unknown: unknown;
unknown = "This can be a string";
console.log(typeof unknown);

// void Type
function sayHello(): void {
  console.log("Hello, World!");
}

// Type Aliases
// 1) Primitive types
type Name = string;

let firstName: Name;
let lastName: Name;

// 2) Object types
// type Person = {
//   name: string;
//   age: number;
// };
// let person1: Person = {
//   name: "Alice",
//   age: 30,
// };

// 3) Union Types
type alphanumeric = string | number;
let input: alphanumeric;

input = "123";
input = 456;

// 4) Intersection Types
type TPersonal = {
  name: string;
  age: number;
};
type TContact = {
  email: string;
  phone: string;
};
type TEmployee = TPersonal & TContact;
let employee1: TEmployee = {
  name: "Joe",
  age: 25,
  email: "joe@example.com",
  phone: "(408)-123-4567",
};

// Section 3. Control Flow Statements
console.log("Section 3. Control Flow Statements");
// if else
console.log("if else example:");
const max = 100;
let counter = 100;

if (counter < max) {
  counter++;
} else {
  counter = 1;
}

console.log(counter);

// Ternary operator ?:
counter < max ? counter++ : (counter = 1);
console.log(counter);

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10;
} else {
  discount = 15;
}

console.log(`You got ${discount}% discount. `);

// switch case
console.log("switch case example:");
let targetId = "btnDelete";

switch (targetId) {
  case "btnUpdate":
    console.log("Update");
    break;
  case "btnDelete":
    console.log("Delete");
    break;
  case "btnNew":
    console.log("New");
    break;
}

// for
console.log("for loop example:");
for (let index = 0; index < 10; index++) {
  console.log(`Index: ${index}`);
}
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 5) break;
}
let j = 0;
for (;;) {
  console.log(j);
  j++;
  if (j > 9) break;
}

// while
console.log("While loop example:");
let index = 0;

while (index < 5) {
  console.log(index);
  index++;
}

// do while
console.log("do while example:");
let x = 0;

do {
  console.log(x);
  x++;
} while (x < 0);

// break
console.log("break example:");
let products = [
  { name: "phone", price: 700 },
  { name: "tablet", price: 900 },
  { name: "laptop", price: 1200 },
];
for (let index = 0; index < products.length; index++) {
  const element = products[index];
  if (element.price == 1200) break;

  console.log(element);
}

// continue
console.log("continue example:");
for (let index = 0; index < 9; index++) {
  if (index % 2 == 0) continue;
  console.log(index);
}

// Section 4. Functions
console.log("Section 4. Functions");
// Function Types
console.log("Function Types");
let add = function (x: number, y: number) {
  return x + y;
};
console.log(`Add: ${add(5, 10)}`);

let concatenate: (str1: string, str2: string) => string = function (
  str1: string,
  str2: string
) {
  return str1.concat(" ").concat(str2);
};
console.log(`Concatenate: ${concatenate("Hello", "World")}`);

// Optional Parameters
console.log("Optional Parameters");
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}
console.log(`Multiply: ${multiply(5, 7, 2)}`);

// Default Parameters
console.log("Default Parameters");
function applyDiscount(price: number, discount: number = 0.05): number {
  return price * (1 - discount);
}
console.log(`Price after discount: $${applyDiscount(100)}`);

// Rest Parameters
console.log("Rest Parameters");
// Bir rest parametresi bildirmek için,
// parametre adının önüne üç nokta (…) ekleyin ve tür açıklaması olarak dizi türünü kullanın:
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30

function combine(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = "";
  args.forEach((arg) => {
    if (typeof arg === "number") {
      total += arg;
    } else if (typeof arg === "string") {
      str += arg;
    }
  });

  return [total, str];
}
const [total, str] = combine(3, "Happy", 2, 1, " New Year");
console.log(`Total: ${total}, String: ${str}`);

// Function Overloading
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
  if (c) return a + b + c;
  return a + b;
}

// Section 5. Classes
console.log("Section 5. Classes");
// Class
console.log("Class");
const person = new Person("John", "Doe", 20);
console.log(`getFullName: ${person.getFullName()}`);

// Access Modifiers
// Özet: Bu eğitimde, TypeScript'teki private, protected ve public gibi
// erişim tanımlayıcılarını öğreneceksiniz.
// Public değiştiricisi, sınıf özelliklerinin ve yöntemlerinin tüm konumlardan
// erişilebilir olmasını sağlar. Özellikler ve yöntemler için
// herhangi bir erişim değiştiricisi belirtmezseniz,
// varsayılan olarak public değiştiricisini alırlar.

// Getters and Setters
// public get age() {
//     return this._age;
//   }

//   public set age(theAge: number) {
//     if (theAge <= 0 || theAge >= 200) {
//       throw new Error("The age is invalid");
//     }
//     this._age = theAge;
//   }

// Inheritance
console.log("Inheritance");
const dog = new Dog("Karabas", "Kangal");
dog.speak();
dog.bark();

// Static Methods and Properties
const jane = new Employee("Jane", "Doe", 30, "Back-end Developer");
console.log(`ToJson: ${jane.toJson()}`);
console.log("Static Properties");
console.log(`Propertie Headcount: ${Employee.headcount}`);
console.log("Static Methods");
console.log(`Method Headcount: ${Employee.getHeadcount()}`);

// Abstract Classes
console.log("Abstract Classes");
// /abstract/Education.ts is an abstract class.
// /models/UniversityEducation.ts is an example of a class derived from here.
const education = new UniversityEducation(
  "Stanford University",
  "Computer Science",
  2015,
  2019,
  "Bachelor of Science"
);
console.log(`Degree: ${education.getDegree()}`);

// Section 6. Interfaces
console.log("Section 6. Interfaces");
// Interface
console.log("Interface");
const personInput: PersonInput = {
  ssn: "171-28-0926",
  firstName: "John",
};
console.log(`Is valid: ${Person.validate(personInput)}`);

let john = {
  firstName: "John",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};
console.log(Person.validate(john));

// Interface Function types
console.log("Interface Function types");
console.log(format("hi", true));

// Extend Interfaces
console.log("Extend Interfaces");
// Mailable adında, send() ve queue() adında iki metodu içeren bir arayüzünüz olduğunu varsayalım:
// Ve Mailable arayüzünü zaten uygulayan birçok sınıfınız var.
// Şimdi Mailable arayüzüne aşağıdaki gibi bir e-posta gönderen yeni bir metot eklemek istiyorsunuz:
// later(email: string, after: number): void
// Ancak later() metodunu Mailable arayüzüne eklemek mevcut kodu bozacaktır.
// Bunu önlemek için Mailable arayüzünü genişleten yeni bir arayüz oluşturabilirsiniz: FutureMailable
const mail = new Mail();
let mailAddress: string = "test@example.com";

mail.send(mailAddress);
mail.queue(mailAddress);
mail.later(mailAddress, 1000);

// Interfaces vs Abstract Classes
// Arayüzler ve soyut sınıflar, TypeScript'te kodunuzu tasarlamak ve düzenlemek için güçlü araçlardır, ancak biraz farklı amaçlara hizmet ederler.
// Aşağıdaki tablo arayüzler ve soyut sınıflar arasındaki farkları göstermektedir:
// Interfaces                               Abstract Classes
// - Sözleşme yapısını tanımlar.            - Ortak işlevsellik ve yapı sağlar.
// - Çoklu kalıtımı destekler.              - Tek sınıf kalıtımını destekler.
// - Arayüzlerde uygulama kodu yok.         - Uygulanmış ve soyut yöntemleri birleştirir.
// - Genişletilebilir.                      - Türetilmiş sınıflar için paylaşımlı yöntemler sağlanabilir.
// - Arayüzlerde constructor yok.           - Başlatma için constructor olabilir.
// - Nesnelerin yapıya yapışmasını sağlar.  - Ortak bir tip ve işlevsellik sağlar.
// - Arayüzler örneklendirilemez.           - Soyut sınıflar doğrudan örneklendirilemez.
// - Sözleşme ve yapı tasarımı.             - İlgili sınıflar arasında işlevselliğin paylaşılması.

// Section 7. Advanced Types
console.log("Section 7. Advanced Types");
// Intersection Types
console.log("Intersection Types");

type Customer = BusinessPartner & Contact;
let c: Customer = {
  name: "ABC Inc.",
  credit: 1000000,
  email: "sales@abcinc.com",
  phone: "(408)-897-5735",
};

// Section 8. Generics
console.log("Section 8. Generics");

// Generics
console.log("Generics");
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["one", "two", "three", "four", "five"];
let element = getRandomElement(numbers);
let stringElement = getRandomElement(strings);
console.log(`Random Element: ${element}`);
console.log(`Random String Element: ${stringElement}`);

// Generic Classes
console.log("Generic Classes");
const numberStack = new Stack<number>(5);

while (!numberStack.isFull()) {
  let n = Math.floor(Math.random() * 100 + 1);
  console.log(`Push ${n} into the stack.`);
  numberStack.push(n);
}
while (!numberStack.isEmpty()) {
  let n = numberStack.pop();
  console.log(`Pop ${n} from the stack.`);
}

let words = "The quick brown fox jumps over the lazy dog".split(" ");
let wordStack = new Stack<string>(words.length);

words.forEach((word) => wordStack.push(word));
console.log("Words in the stack:");
while (!wordStack.isEmpty()) {
  console.log(`Pop ${wordStack.pop()} from the stack.`);
}

// Generic Interfaces
console.log("Generic Interfaces");
// Generic interfaces that describe object properties
let month: Pair<string, number> = {
  key: "Jan",
  value: 1,
};
console.log(month);

// Generic interfaces that describe methods
let list = new List<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: () => "Hi there",
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee11: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: () => "Hello!!!",
};
console.log("Employee  Object ");
console.log(employee11.firstName);
console.log(employee11.lastName);

console.log("TypeScript Interfaces");
console.log("Printer Object ");
const printer = new Printer();
printer.copy();
printer.print();
printer.scan();

console.log("TypeScript Classes and Objects");

console.log("TypeScript - Classes");
console.log("Dog1 Object ");
const dog1: Dog1 = {
  name: "Buddy",
  makeSound: () => {
    console.log("Woof Woof");
  },
};
dog1.makeSound();

const agriLoan = new AgriLoan(5, 2);
console.log(`Interest: ${agriLoan.interest}, Rebate: ${agriLoan.rebate}`);

console.log("TypeScript - Objects");
const point = new Point();
let resultPoint: IPoint = point.addPoints({ x: 1, y: 2 }, { x: 3, y: 4 });

console.log(`Result Point: x=${resultPoint.x}, y=${resultPoint.y}`);

console.log("TypeScript - Access Modifiers");
const bankAccount = new BankAccount(1000);
console.log(`Interest: ${bankAccount.calculateInterest()}`);

console.log("TypeScript - Readonly Properties");
interface Car {
  model: string;
  year: number;
  readonly fuel: string;
}
let car1: Car = {
  model: "Toyota",
  year: 2022,
  fuel: "Gasoline",
};
console.log(`Car Model: ${car1.model}, Year: ${car1.year}, Fuel: ${car1.fuel}`);

console.log("TypeScript - Inheritance");
let emp = new Employee1("John Doe", 12345);
emp.show();

console.log("TypeScript - Static Methods and Properties");

console.log("TypeScript - Accessors");
const person2 = new PersonWithGetterSetter("Jane Doe");
console.log(`Person Name: ${person2.getName}`);

const temperature = new Temperature(25);
console.log("The Fahrenheit value is: " + temperature.fahrenheit);
temperature.celsiusValue = 30;
console.log("The Fahrenheit value is: " + temperature.fahrenheit);

console.log("TypeScript - Duck Typing");
function makeDuckQuack(duck: Duck) {
  duck.quack();
}
// let duck: Duck;
// duck = new MallardDuck();
// duck.quack();
// duck = new RubberDuck();
// duck.quack();
makeDuckQuack(new MallardDuck());
makeDuckQuack(new RubberDuck());

function goDrive(driveable: Driveable) {
  driveable.drive();
}
goDrive(new Bus());
goDrive(new Truck());
