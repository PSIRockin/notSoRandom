const input = process.argv [2]

function random () {
    const number = Math.floor(Math.random()*input)
    console.log (number)
}

random ();

const stringinput = process.argv [3]

function randomLetter () {
    const letter = Math.floor(Math.random()*stringinput.length)
    console.log (stringinput[letter])
}

randomLetter ();

function myGuy (chill) {
    console.log (chill + ", my guy.")
}

myGuy(process.argv[4]);


function string_N_times(string, n) {
    if (n > 0)
    return string.repeat(n);
  else
    return "";
}

string_N_times(process.argv[5], process.argv[6]);

