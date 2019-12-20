class Person {
  firstName: string;
  lastName: string;
  greet() {
    console.log('Hey there!');
  }
}

class Programmer extends Person {

}

const aProgrammer = new Programmer();

aProgrammer.greet();