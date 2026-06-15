let word = "banana";

let counter = 0;
for(let i = 0; i < word.length; i++){
    if (word[i] === "a"){
        counter++;
    }
}
console.log(counter, "letter a's");

let vowels = "aeiou";
counter = 0;
for (let i = 0; i < word.length; i++){
    if(vowels.includes(word[i])){
        counter++;
    }
}
console.log(counter, "vowels");

let reversed = "";
for(let i = word.length - 1; i >= 0; i--){
    reversed = reversed + word[i];
}
console.log("Reversed:", reversed);