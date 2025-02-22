const disha = 86;
const salman = 76;

if (disha > salman) {
  console.log('Disha will be win');
} else {
  console.log('Salman will be win');
}

// function

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(76, 96);
console.log('Maximum number is:', max);
