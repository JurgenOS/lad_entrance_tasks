const readlineSync = require('readline-sync');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const numbers = randomInteger(3, 6);
let generated_number = '';

for (let i = 0; i < numbers;) {
    let digit = randomInteger(1, 9);
    if (generated_number.indexOf(digit) == -1) {
        generated_number += digit;
        i++;
    }
}

console.log(generated_number);

attemptNumber = 3;

while (attemptNumber > 0) {
    const userNumber = readlineSync.question('Ведите число содержащее от 3 до 6 цифр:');
    ordered_matches = 0;
    ordered_numbers = '';
    unordered_matches = 0;
    unordered_numbers = '';

    for (n of userNumber) {
        if (n == generated_number[userNumber.indexOf(n)]) {
            ordered_numbers += n;
            ordered_matches += 1;
            //console.log(n = ${n} m = ${m});
        } else if (generated_number.includes(n)) {
            unordered_matches += 1;
            unordered_numbers += n;
            //console.log(n = ${n} m = ${m});
        }
    }
    console.log(`ответ: совпавших цифр не на своих местах - ${unordered_matches} (${unordered_numbers.split('')}), цифр на своих местах - ${ordered_matches} (${ordered_numbers.split('')})`);
    attemptNumber -= 1;
    if (ordered_matches == numbers) {
        console.log('Угадано!');
        attemptNumber = 0;
    }
}