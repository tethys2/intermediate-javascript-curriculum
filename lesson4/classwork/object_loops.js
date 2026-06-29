let scores = {
    Alex: 92,
    Maya: 87,
    Liam: 75,
    Sophie: 98
}

let names = Object.keys(scores);
console.log(names);

for(let i = 0; i < names.length; i++){
    let name = names[i];
    console.log(name, "has score", scores[name]);
}

let best_name = names[0];
let best_score = scores[best_name];

for (let i = 0; i < names.length; i++){
    let name = names[i];
    if (scores[name] > best_score){
        best_score = scores[name];
        best_name = name;
    }
}

console.log("Best score:", best_name, best_score);