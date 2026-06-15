let word = "javascript"

let result = "";
for (let i = 0; i < word.length; i++){
    result = result + word[i].toUpperCase();
}
console.log(result);

result = "";
for(let i = 0; i < word.length; i++){
    if(word[i] !== "a"){
        result = result + word[i];
    }
}
console.log(result);

result = "";
for(let i = 0; i < word.length; i+=2){
    result = result + word[i];
}
console.log(result);