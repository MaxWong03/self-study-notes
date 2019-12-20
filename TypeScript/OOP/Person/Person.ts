class Person {
  firstName: string;
  lastName: string;
  greet() {
    console.log('Hey there!');
  }
}

class Programmer extends Person {
  greet() {
    console.log('Hello world');
  }

  greetLikeNormalPeople() {
    super.greet();
  }
}

const aProgrammer = new Programmer();

aProgrammer.greet();
aProgrammer.greetLikeNormalPeople();

// idea that you can have instances of multiple classes refer to using a parent class type 
//Polymorphism Example

//Type is a Person, because Programmer is a Person
const anotherProgrammer: Person = new Programmer();

//When you call the method, you get the instance implememntation of the method. OutPut: Hello World
anotherProgrammer.greet();

//It doesnt get greetLikeNormalPeople() because it is still a Person after all