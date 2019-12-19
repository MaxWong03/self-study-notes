function greeter(person) {
    return "Hello " + (person.firstName + ' ' + person.lastName);
}
var user = { firstName: 'Jane', lastName: 'Merry' };
console.log(greeter(user));
