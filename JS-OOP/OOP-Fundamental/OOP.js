// classes are like blueprints for constructing objects
// objects(instances)

class Person {
  //def__init__()
  constructor(firstName, lastName, email, hairColor = "black") {
    // these are attributes of the objects
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.hairColor = hairColor;
  }

  sayName() {
    console.log(`My name is  ${this.firstName} ${this.lastName}`);
  }

  //   getter
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  //   getter
  set fullName(str) {
    const split = str.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  }
}

class Course {
  constructor(name, instructor, day, time) {
    this.name = name;
    this.instructor = instructor;
    this.day = day;
    this.time = time;
  }
}

class Student extends Person {
  constructor(firstName, lastName, email, hairColor = "black") {
    super(firstName, lastName, email, hairColor);
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

const neil = new Student("Neil", "Yuen", "n@y.com");
neil.sayName();
// neil.fullName = "NotNeil Yuen";
console.log(neil.fullName);

const morley = new Person("Morley", "Tatro", "m@t.com", "brown");
const sadie = new Person("Sadie", "Flack", "s@l.com", "Black");
const mern = new Course("MERN", morley, "M-F", "9:00 AM");
const python = new Course("Python", sadie, "M-F", "9:00 AM");

neil.addCourse(mern);
neil.addCourse(python);
console.log(neil.courses);

const patrick = new Student("Patrick", "Laugesen", "p@l.com", "blond");
patrick.addCourse(mern);
