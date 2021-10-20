'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Display Movements
const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  // --------------- Map & Filter & Reduce & Find & Sort------------------------
  ///////// Euro to USD /////////
  // const eurToUsd = 1.1;
  // const usd = movements.map(mov => mov * eurToUsd);
  // console.log(usd);

  ///////// Map - movement /////////
  // const movementsDescription = movements.map(
  //   (mov, i) =>
  //     `Movement: ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(
  //       mov
  //     )}`
  // );
  // console.log(movementsDescription);

  ///////// Map - creating username /////////

  /* 
  // #1 - Manually use user name
  const user = 'Steven Thomas Williams'; // from Steven Thomas Williams to stw
  const userName = user
    .toLowerCase() // steven thomas williams
    .split(' ') // ['steven', 'thomas', 'williams']
    .map(name => name[0]) // ['s', 't', 'w']
    .join(''); // stw
  console.log(userName);

  // #2 - Making function 
  const createUsernames = userName =>
    userName
      .toLowerCase() // steven thomas williams
      .split(' ') // ['steven', 'thomas', 'williams']
      .map(name => name[0]) // ['s', 't', 'w']
      .join(''); // stw
  console.log(createUsernames('Steven Thomas Williams'));
  */

  ///////// Filter - deposits /////////
  // return new array called deposits with only mov is greater than 0
  //const deposits = movements.filter(mov => mov > 0);
  //console.log(deposits);

  // Same result as above but using for loop
  //const depositsFor = [];
  //for (const mov of movements) if (mov > 0) depositsFor.push(mov);
  //console.log(depositsFor);

  ///////// Filter - withdrawals /////////
  //const withdrawals = movements.filter(mov => mov < 0);
  //console.log(withdrawals);

  ///////// Reduce - balance /////////
  // const balance = movements.reduce((acc, curr, i) => {
  //   console.log(`Iteration: ${i}: ${acc}`);
  //   return acc + curr;
  // }, 0); // 0 is initial value
  // console.log(balance);

  // Same result as above but using for loop
  //let balance2 = 0;
  //for (const mov of movements) balance2 += mov;
  //console.log(balance2);

  ///////// Reduce - Finding Max value /////////
  // const max = movements.reduce((acc, curr) => {
  //   let maxValue = acc;
  //   return acc < curr ? (maxValue = curr) : (maxValue = acc);
  // }, movements[0]);
  // console.log(max);
  //max(account1.movements)

  ///////// Find - Finding first withdrawal value /////////
  // const firstWithdrawal = movements.find(mov => mov < 0);
  // console.log(movements);
  // console.log(firstWithdrawal);

  ///////// Find - Finding owner account info given condition /////////
  // const accountInfo = accounts.find(acc => acc.owner === 'Jessica Davis');
  // console.log(accountInfo); // Returns matched one object

  // Sort - Ascending
  // return value < 0, A, B (keep order)
  // return value > 0, B, A (switch order)
  // movements.sort((a, b) => {
  //   if (a > b) return 1;  // switch order
  //   if (a < b) return -1; // keep order
  // });
  // Same result as above
  //movements.sort((a, b) => a - b);
  //console.log(movements);

  // Sort - descending
  // movements.sort((a, b) => {
  //   if (a > b) return -1;
  //   if (a < b) return 1;
  // });
  // Same result as above
  //movements.sort((a, b) => b - a);
  //console.log(movements);

  //------------------  END (Map & Filter & Reduce & Find & Sort) -------------------
};

//displayMovements(account2.movements);

// #3 - Use array & function
const createUsernames = accs => {
  // console.log(accs);
  accs.forEach(acc => {
    // console.log(acc.owner);
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Displaying current balance
const calcDisplayBalance = acc => {
  const balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance} €`;
};
//calcDisplayBalance(account1.movements);

// Displaying summary (deposits, withdrawals, interests)
const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  // console.log(income);
  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  // console.log(outcome);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interestRate = acc.interestRate;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * interestRate) / 100)
    .filter(
      (int, i, arr) =>
        // console.log(arr);
        // return int >= 1;
        int >= 1
    )
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//calcDisplaySummary(account1.movements);

// Update UIs
const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//----- Login ------

let currentAccount;

//Login Button

btnLogin.addEventListener('click', e => {
  // Clicking submit button cause reload.
  // To prevent form from submitting, use e.preventDefault();
  e.preventDefault();
  //console.log('LOGIN');

  // Find username
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);
  // If nothing matched element found, result will be 'undefined'

  // Check if the password is correct
  // If username is 'undefined', it will cause TypeError.
  // To prevent it, check if username is exist
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //console.log('CORRECT');
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  } else {
    console.log('INCORRECT');
  }
});

// Trasnfer Money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const currentAccBalance = currentAccount.balance;
  //console.log(currentAccBalance);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    receiverAcc &&
    amount > 0 &&
    currentAccBalance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    receiverAcc.movements.push(amount);
    currentAccount.movements.push(-amount);
    console.log(receiverAcc.movements);
    console.log(currentAccount.movements);
    updateUI(currentAccount);
  } else {
    console.log('Please check your balance');
  }
});

console.log(accounts);

// Loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// Close account
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const currentAccountIdx = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(currentAccountIdx);
    accounts.splice(currentAccountIdx, 1);
    console.log(accounts);

    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log('check');
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// Bank Balance
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Same result as above using chaining method
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// Same result as above using flatMap
const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Sort - Display movements ascending
// (Our application start from bottom so it looks descending)

let sorted = false; // To solve the below problem, set state

btnSort.addEventListener('click', e => {
  e.preventDefault();
  // Below function has an issue
  // If I click 'Sort' button again, it won't go back original display
  // displayMovements(currentAccount.movements, true);
  displayMovements(currentAccount.movements, !sorted); // working like toggle
  sorted = !sorted;
});

/* -------------------------- Practice Array Methods --------------------------

// Number of deposit over $1000
// #1 - with filter()
// const bankDeposit1000Filter = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(bankDeposit1000Filter);

// #2 - with reduce()
// const bankDeposit1000Reduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(bankDeposit1000Reduce);

// reduce() with object
// const sums = accounts
//   .flatMap(mov => mov.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// Same result as above
// const { deposits, withdrawals } = accounts
//   .flatMap(mov => mov.movements)
//   .reduce(
//     (sums, cur) => {
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);
*/

// Capitalize the title with exception
// const convertTitleCase = title => {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');

//   return titleCase;
// };

// console.log(convertTitleCase('My name is SEOL Hi Kim'));
