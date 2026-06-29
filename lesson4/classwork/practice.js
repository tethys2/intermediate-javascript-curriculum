// Problem 1
// Create an object for a book with title, author, and pages.
// Print each value.

let book = {
    title: "Wonder", 
    author: "R. J. Palacio",
    pages: 315
}

console.log(book.title);
console.log(book.author);
console.log(book.pages);

// Problem 2
// Add a rating key to the book object and print the object.

book.rating = 5;
console.log(book);

// Problem 3
// Create an object of student scores.
// Print every student and score.

let scores = {
    Alex: 90,
    Maya: 85,
    Liam: 93
};

let names = Object.keys(scores);
for (let i = 0; i < names.length; i++){
    let name = names[i]
    console.log(name, scores[name])
}

// Problem 4
// Count how many times each color appears in the array.

let colors = ["red", "blue", "red", "green", "blue", "red"];
let frequency = {};

for (let i = 0; i < colors.length; i++){
    let color = colors[i];
    if (color in frequency) {
        frequency[color] = frequency[color] + 1;
    }
    else{
        frequency[color] = 1;
    }
}
console.log(frequency);

// Problem 5
// Use an object to look up the price of an item.

let prices = {
    apple: 2,
    banana: 1,
    pizza: 8
};

let item = "pizza";
if (item in prices){
    console.log(item, "costs", prices[item]);
}
else{
    console.log("Item not found");
}
