let animals = ["cat", "dog", "cat", "tiger", "dog", "cat"];
let frequency = {};

for(let i = 0; i < animals.length; i++){
    let animal = animals[i];

    if (animal in frequency){
        frequency[animal] = frequency[animal] + 1;
    }
    else{
        frequency[animal] = 1;
    }
}

console.log(frequency);
console.log("Cats:", frequency["cat"]);
console.log("Dogs:", frequency["dog"]);
console.log("Tigers:", frequency["tiger"]);

let letters = "banana";
let letter_counts = {};

for (let i = 0; i < letters.length; i++) {
  let ch = letters[i];
  if (ch in letter_counts) {
    letter_counts[ch] = letter_counts[ch] + 1;
  } else {
    letter_counts[ch] = 1;
  }
}

console.log(letter_counts);
