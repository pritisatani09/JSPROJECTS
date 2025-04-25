// 1) Create a School class and create a student and faculty method. The Student method gives the student name, email and contact number as arguments and prints all details the same as faculty using class & object. */

// class School {
//     student(name, email, contact) {
//       console.log("Student Details:");
//       console.log("Name:", name);
//       console.log("Email:", email);
//       console.log("Contact:", contact);
//     }
  
//     faculty(name, email, contact) {
//       console.log("Faculty Details:");
//       console.log("Name:", name);
//       console.log("Email:", email);
//       console.log("Contact:", contact);
//     }
// }
// let mySchool = new School();
  
// mySchool.student("priti", "priti@gmail.com", "9432320145");
// mySchool.faculty("Ms.Tina Mehta", "tina@gmail.com", "9987654321");
  
// OUTPUT:
// Student Details:
// Name: priti
// Email: priti@gmail.com
// Contact: 9432320145
// Faculty Details:
// Name: Ms.Tina Mehta
// Email: tina@gmail.com
// Contact: 9987654321



/*2) Create a Person class with an argument name and age.create an Employee class
through print out details of Person Class. */
// class Person {
//     constructor(name, age){
//       this.name = name;
//       this.age = age;
//     }
//     showDetails() {
//       console.log("Name: ",this.name);
//       console.log("Age: ",this.age);
//     }
// }
// class Employee extends Person{
//     constructor(name, age){
//     super(name, age);
//     }
// }
// let emp = new Employee("John",30);
// emp.showDetails();

// OUTPUT:
// Name:  John
// Age:  30
  


//3) Employee class creates a constructor called print a simple message. 
// class Employee {
//     constructor() {
//       console.log("Hello employee!");
//     }
//   }
// let emp = new Employee();

// OUTPUT:
// Hello employee!



/* 4) Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and 
rectangle area (width*height) using with argument. */
// class Shape {
//     circleArea(radius) {
//       let area = 3.14 * radius * radius;
//       console.log("Circle Area:",area);
//     }

//     rectangleArea(width, height) {
//       let area = width * height;
//       console.log("Rectangle Area:",area);
//     }
// }
  
// let myShape = new Shape();

// myShape.circleArea(3);       
// myShape.rectangleArea(8, 3);

// OUTPUT:
// Circle Area: 28.259999999999998
// Rectangle Area: 24