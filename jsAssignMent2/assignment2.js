/* check whether a triangle is equilateral,
isosceles or scalene*/

function checkTriangle(x, y, z) {
  if (x === y && y === z) {
    console("equilateral triangle");
  } else if (x == y || y === z || x === z) {
    console.log("isosceles");
  } else {
    console.log("scalene");
  }
}

// checkTriangle(5, 6, 9);

// check grade
x = "46";
switch (true) {
  case 90 < x && x < 100:
    console.log("S grade");
    break;

  case 80 < x && x < 90:
    console.log(" A grade");
    break;

  case 70 < x && x < 80:
    console.log(" B grade");
    break;

  case 60 < x && x < 70:
    console.log(" C grade");
    break;

  case 50 < x && x < 60:
    console.log(" D grade");
    break;

  case 40 < x && x < 50:
    console.log(" E grade");
    break;

  case 0 < x && x < 40:
    console.log(" Student has failed");
    break;
  default:
    console.log("invalid marks");
}

// sum of multiple of 3 and 5
j = 0;
x = 0;
while (x <= 1000) {
  if (x % 3 == 0 && x % 5 == 0) {
    j += x;
  }
  x++;
}

console.log(j, x);

// find factorial of all prime numbers between given range

function getFact(num) {
  if (num === 1) {
    return num;
  } else {
    return num * getFact(num - 1);
  }
}
function Prime(a, b) {
  for (let i = a; i < b + 1; i++) {
    if (i === 1 || i === 0) {
      continue;
    }
    is_prime = true;
    for (j = 2; j <= i / 2; ++j) {
      if (i % j == 0) {
        is_prime = false;
        break;
      }
    }

    if (is_prime) {
      console.log(`facotrial of prime number ${i} is ${getFact(i)}`);
    }
  }
}

Prime(2, 100);
