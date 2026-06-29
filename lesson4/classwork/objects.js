let person = {
    name: "Alex",
    age: 15,
    city: "Seattle"
};

console.log(person);
console.log("Name:", person.name);
console.log("Age:", person["age"]);

person.favorite_food = "pizza";
console.log(person);

person.age = person.age + 1;
console.log("New age:", person.age);

console.log("name" in person);
console.log("height" in person);

