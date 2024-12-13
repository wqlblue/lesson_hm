function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Add(Person, a, b) {
    console.log(arguments[0]);

}

Add(Person, 2, 3);

