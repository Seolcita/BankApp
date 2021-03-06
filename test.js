// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJulia.slice(1, 3);
  //dogsJuliaCorrected.splice(0, 1);
  //dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  //console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      //console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      //console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs(julia, kate);

/* Coding Challenge 2
Let's go back to Julia and Kate's study about dogs. This time, 
they want to convert dog ages to human ages and calculate the average age of 
the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages 
('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = dogsAges => {
  /*
  // #1
  const humanAges = dogsAges.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(humanAges);

  // #2
  const adult = humanAges.filter(humanAge => humanAge >= 18);
  console.log(adult);

  // #3
  const avgAge = adult.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  console.log(avgAge);
*/
  const avgAge = dogsAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  //console.log(avgAge);
};
calcAverageHumanAge(ages);

/* Coding Challenge 3
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge2 = dogsAges => {
  const avgAge = dogsAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  //console.log(avgAge);
};

calcAverageHumanAge2(ages);

// Experimenting API --- Internationalizing Date

const account3 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-10-23T17:01:17.194Z',
    '2021-10-20T23:36:17.929Z',
    '2021-10-21T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account4 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts2 = [account3, account4];

const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // long >> August, numeric >> 8
  year: 'numeric',
  weekday: 'short', // long >> Friday, short >> Fri
};

const local = navigator.language;
console.log(local);

// Manually set language
const formated = new Intl.DateTimeFormat('en-US', options).format(now);
console.log(formated);

// Automatically set language
const formated2 = new Intl.DateTimeFormat(local, options).format(now);
console.log(formated2);

// Experimenting API --- Internationalizing Number
const num = 2039234.23;

const options2 = {
  style: 'currency',
  currency: 'EUR',
};

const usa = new Intl.NumberFormat('en-US', options2).format(num);
const germany = new Intl.NumberFormat('de-DE', options2).format(num);
const us = new Intl.NumberFormat('kor', options2).format(num);
const localLanNum = new Intl.NumberFormat(navigator.language, options2).format(
  num
);

console.log(usa);
console.log(germany);
console.log(us);
console.log(navigator.language, localLanNum);

// setTimeout
setTimeout(() => console.log('Time out'), 3000);

// setTimeout with function arguments
setTimeout(
  (arg1, arg2) => {
    console.log(`Cookie's friends are ${arg1} and ${arg2}`);
  },
  3000,
  'Chai',
  'Junny'
);

// clearTimeout
const ingredients = ['olives', 'spinach'];
console.log(...ingredients);
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}`);
  },
  3000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
const intv = setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

clearTimeout(intv);
