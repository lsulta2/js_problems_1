function isleapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const islipi = isleapYear(2034);
console.log(islipi);
