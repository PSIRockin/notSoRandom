const input = process.argv [2];

function random () {
    const number = Math.floor(Math.random()*input);
    console.log (number);
}

random ();

const stringinput = process.argv [3];

function randomLetter () {
    const letter = Math.floor(Math.random()*stringinput.length);
    console.log (stringinput[letter]);
}

randomLetter ();

function myGuy (chill) {
    console.log (chill + ", my guy.");
}

myGuy(process.argv[4]);

const string = process.argv[5];
const n = process.argv[6]

function string_N_times() {
    if (n > 0){
    console.log(string.repeat(n));
    }
}
string_N_times();