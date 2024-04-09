//// Using the Moment.js library, try to solve the below problems (Use console.log() to check results. Run node script.js to test your code)

// 1. Calculate the number of days between your birthdate and the current date

const parseDate = (str) => {
    const [month, day, year] = str.split('/');
    return new Date(year, month - 1, day);
  }
  const dateDiff = (first, second) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
  const diff = dateDiff(parseDate("24/12/2023"), parseDate("6/10/1993"))
  console.log(diff)

// 2. Display the number of years, months, and days between your birthdate and current date
// 	Example: 24 years, 8 months, and 26 days











// 3. Given two dates, display the date closest to the current date











// 4. Given two dates, display whether the first date is before or after the second date












// 5. Display the current time in London
