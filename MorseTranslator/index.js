const morseMap = new Map([
    ['a', '.-'],
    ['b', '-...'],
    ['c', '-.-.'],
    ['d', '-..'],
    ['e', '.'],
    ['f', '..-.'],
    ['g', '--.'],
    ['h', '....'],
    ['i', '..'],
    ['j', '.---'],
    ['k', '-.-'],
    ['l', '.-..'],
    ['m', '--'],
    ['n', '-.'],
    ['o', '---'],
    ['p', '.--.'],
    ['q', '--.-'],
    ['r', '.-.'],
    ['s', '...'],
    ['t', '-'],
    ['u', '..-'],
    ['v', '...-'],
    ['w', '.--'],
    ['x', '-..-'],
    ['y', '-.--'],
    ['z', '--..'],
    [' ', '/'],
]);

const morseMapReverse = new Map([
    ['.-', 'a'],
    ['-...', 'b'],
    ['-.-.', 'c'],
    ['-..', 'd'],
    ['.', 'e'],
    ['..-.', 'f'],
    ['--.', 'g'],
    ['....', 'h'],
    ['..', 'i'],
    ['.---', 'j'],
    ['-.-', 'k'],
    ['.-..', 'l'],
    ['--', 'm'],
    ['-.', 'n'],
    ['---', 'o'],
    ['.--.', 'p'],
    ['--.-', 'q'],
    ['.-.', 'r'],
    ['...', 's'],
    ['-', 't'],
    ['..-', 'u'],
    ['...-', 'v'],
    ['.--', 'w'],
    ['-..-', 'x'],
    ['-.--', 'y'],
    ['--..', 'z'],
    ['/', ' '],
]);

function convertToMorse(){
    let data = document.querySelector('.textarea').value;
    data = data.toLowerCase();
    let morse = '';
    console.log(data)

    for(let i=0;i<data.length - 1;i++){
        let m = morseMap.get(data[i]);
        console.log(m);
        morse += m + ' ';
    }
    morse += morseMap.get(data[data.length-1]);
    console.log(morse)
    document.querySelector('.result').innerText = morse;
}

function convertToEnglish(){
    let data = document.querySelector('.textarea').value;
    data = data.toLowerCase();
    let english = '';
    console.log("Convert to english Calling :", data)

    let dataArray = data.split(" ")
    console.log(dataArray)

    for(let i=0;i<dataArray.length;i++){
        let m = morseMapReverse.get(dataArray[i]);
        english += m;
    }
    console.log(english)
    document.querySelector('.result').innerText = english;
}


function translateF(){
    console.log("Called")
    const from = document.querySelector('.fromLang').innerText
    const to = document.querySelector('.toLang').innerText
    console.log(from, to)
    if(from === 'English'){
        convertToMorse()
    } else{
        convertToEnglish()
    }
}

function interchange(){
    let from = document.querySelector('.fromLang').innerText;
    let to = document.querySelector('.toLang').innerText;
    if(from === 'English'){
        document.querySelector('.fromLang').innerText = 'Morse';
        document.querySelector('.toLang').innerText = 'English'
    } else{
        document.querySelector('.fromLang').innerText = 'English';
        document.querySelector('.toLang').innerText = 'Morse'
    }
}