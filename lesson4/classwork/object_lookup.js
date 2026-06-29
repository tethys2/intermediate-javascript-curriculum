let capitals = {
    washington: "Olympia",
    california: "Sacramento",
    oregon: "Salem"
};

let state = "washington";

if (state in capitals){
    console.log("Capital:", capitals[state]);
}
else{
    console.log("State not found");
}

state = "texas";

if (state in capitals){
    console.log("Capital:", capitals[state]);
}
else{
    console.log("State not found");
}

let days = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday"
}

let short_day = "tue";
console.log(days[short_day]);
