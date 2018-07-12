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