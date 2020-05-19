import {
    Teacher,
    promote
} from './Teacher';
import {
    Person
} from './Person';

// default: import ... from '';
// Name: import {...} from '';

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // let makes the variable only lives in scope
    // var -> function, let -> block defined
    // const -> block scope
    console.log(i);
}

sayHello();

const person = {
    name: "Mosh",
    walk() {
        console.log(this); //this returns reference to the object
    },
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
        //console.log("this", this);
    },
};
person.talk();

person.walk();

const walk = person.walk.bind(person);
walk();

const targetMember = "name";
person[targetMember] = "John";

const square = function (number) {
    return number * number;
};

const square2 = (number) => {
    return number * number;
};

const square3 = (number) => number * number;

console.log(square(5));
console.log(square2(5));
console.log(square3(5));

const jobs = [{
        id: 1,
        isActive: true
    },
    {
        id: 2,
        isActive: true
    },
    {
        id: 3,
        isActive: false
    },
];

const activeJobs = jobs.filter(function (job) {
    return job.isActive;
});

const activeJobs2 = jobs.filter((job) => job.isActive);

const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

const address = {
    street: "",
    city: "",
    country: "",
};
/*
const street = address.street;
const city = address.city;
const country = address.country;
*/
//Object destructing
const {
    street: st,
    city,
    country
} = address;

const first = [1, 2, 3];
const second = [4, 5, 6];
//const combined = first.concat(second);
//const combined2 = [...first, "a", ...second];
//console.log(combined2);

const First = {
    name: "Mosh"
};
const Second = {
    job: "Instructor"
};
const combined = {
    ...First,
    ...Second,
    location: "Australia"
};
console.log(combined);
/*
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
*/
const p1 = new Person("John");
console.log(p1.name);
const t1 = new Teacher("Mosh", 2);
console.log(t1.name);