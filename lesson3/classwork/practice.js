// Problem 1
// Print the numbers from 10 down to 1.
for (let i = 10; i>= 1; i--){
    console.log(i);
}

// Problem 2
// Print every third number from 0 to 30.
for (let i = 0; i <= 30; i += 3){
    console.log(i);
}

// Problem 3
// Build an array of the first 8 square numbers.

let squares = [];
for (let i = 1; i <= 8; i++){
    squares.push(i * i);
}
console.log(squares);

// Problem 4
// Print every item in a 2D array.
let grid = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"]
];

for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++){
        console.log(grid[row][col]);
    }
}

// Problem 5
// Count how many numbers in a 2D array are greater than 10.

let numbers = [
  [4, 15, 2],
  [20, 9, 12]
];

let counter = 0;
for (let row = 0; row < numbers.length; row++){
    for(let col = 0; col < numbers[row].length; col++){
        if(numbers[row][col] > 10){
            counter++;
        }
    }
}
console.log(counter, "numbers are greater than 10");