var ref = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

decodeMorse = function(morseCode) {
  let converted = [];
  morseCode.split('   ').map((word) => {
    word.split(' ').map((letter) => {
      converted.push(ref[letter]);
    });
    converted.push(' ');
  });
  return converted
    .join('')
    .toUpperCase()
    .toString()
    .trim();
};

const input = decodeMorse('.... . -.--   .--- ..- -.. .');
console.log(input);
console.log('HEY JUDE');

console.log(input === 'HEY JUDE');
