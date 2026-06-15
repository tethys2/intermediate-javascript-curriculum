// Problem 1
// Create a word.
// Print the first letter, last letter, and length of the word.
let word = "computer";
console.log("First:", word[0]);
console.log("Last:", word[word.length - 1]);
console.log("Length:", word.length);

// Problem 2
// Create a sentence.
// Print it in all caps and then all lowercase.
let sentence = "JavaScript Is Fun"
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// Problem 3
// Count how many vowels are in a word.

let fruit = "strawberry";
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < fruit.length; i++){
    if(vowels.includes(fruit[i])){
        count++;
    }
}
console.log("Vowels:", count);
// Problem 4
// Build a new string that removes all spaces.
let phrase = "coding is very fun";
let result = "";
for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] !== " ") {
    result = result + phrase[i];
  }
}
console.log(result);

// Problem 5
// Print "Palindrome" if a word reads the same backwards, otherwise print "Not palindrome".

let check_word = "level";
let reversed = "";
for (let i = check_word.length - 1; i>= 0; i--){
    reversed = reversed + check_word[i];
}

if (check_word === reversed){
    console.log("Palindrome");
}
else{
    console.log("Not palindrome");
}
