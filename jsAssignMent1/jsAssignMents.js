function checkLeapYear(year) {
  if ((year % 4 === 0 && !year % 100 === 0) || year % 4 === 0) {
    console.log(`${year} is leap year`);
  } else {
    console.log(`${year} is not leap year `);
  }
}

checkLeapYear(2048);

function celToF(tempCel) {
  let tempfarhn = 1.8 * tempCel + 32;
  console.log(`${tempCel} will be  ${tempfarhn} in farhenhite`);
}

function farhnToCel(tempfarhn) {
  let tempCel = parseInt((5 / 9) * (tempfarhn - 32));
  console.log(`${tempfarhn} will be  ${tempCel} in degree celcius`);
}

// celToF(56);
// farhnToCel(132.8);

function factorial(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(5)); // output 120
