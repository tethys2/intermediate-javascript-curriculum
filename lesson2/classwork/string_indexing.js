let word = "pineapple";
console.log("Word is:", word);

console.log("First letter:", word[0]);
console.log("Second letter:", word[1]);
console.log("Third letter:", word[2]);

console.log("Length:", word.length);

console.log("Last letter:", word[word.length - 1]);

for (let i = 0; i < word.length; i++){
    console.log("Index", i, "has", word[i]);
}

console.log(word[100])