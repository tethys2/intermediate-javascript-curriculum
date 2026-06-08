// Problem 1
// Create variables for a student's name, age, and grade.
// Print a sentence using all 3 variables.

let student_name = "Maya";
let student_age = 12;
let student_grade = 7;
console.log(student_name, "is", student_age, "years old and is in grade", student_grade);
 


// Problem 2
// Create a variable for a score.
// Print "Excellent" if the score is at least 90, "Good" if it is at least 70, otherwise print "Practice more".

let score = 84;
if (score >= 90){
    console.log("Excellent");
}else if (score >= 70){
    console.log("Good");
}else{
    console.log("Practice more");
}

// Problem 3
// Create an array of 5 numbers.
// Print every number using a for loop.
let numbers  = [5, 8, 12, 3, 9];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// Problem 4
// Count how many numbers in the array are greater than 10.

let values = [4, 15, 2, 20, 11, 7];
let counter = 0;
for (let i = 0; i < values.length; i++) {
  if (values[i] > 10) {
    counter = counter + 1;
  }
}
console.log(counter, "numbers are greater than 10");
 

// Problem 5
// Write a function that takes an array and returns the biggest number.

function biggest_number(nums) {
  let biggest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > biggest) {
      biggest = nums[i];
    }
  }
  return biggest;
}
 
console.log(biggest_number([7, 1, 30, 9]));