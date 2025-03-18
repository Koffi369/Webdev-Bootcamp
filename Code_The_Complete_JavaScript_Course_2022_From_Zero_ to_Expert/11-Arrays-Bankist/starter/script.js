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
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (elm, idx) {
    const depositOrwithdrawal = elm > 0 ? 'deposit' : 'withdrawal';

    const htlmToDisplay = ` <div class="movements__row">
          <div class="movements__type movements__type--${depositOrwithdrawal}">${
      idx + 1
    } ${depositOrwithdrawal}</div>
          <div class="movements__value">${elm}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', htlmToDisplay);

    // console.log(htlmToDisplay);
  });
};

// displayMovements(account1.movements);

// Vid 012

const helperCreateUserNames = function (input) {
  return input
    .toLowerCase()
    .split(' ')
    .map(elm => elm[0])
    .join('');
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = helperCreateUserNames(acc.owner);
    // console.log(acc.userName);
    // console.log(acc);
  });
};
createUserNames(accounts);
console.log(accounts);

////////////////////////////////// Vid 014

const computeBalance = function (movements) {
  return movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
};

// console.log(computeBalance(movements));

const displayBalance = function (acc) {
  const totalBalance = computeBalance(acc.movements);

  acc.balance = totalBalance;
  labelBalance.textContent = `${totalBalance}€`;

  // console.log(accounts);
};

// displayBalance(account1.movements);

// Vid 019 Implementing the login

// const loginFunction = function (accs) {
//   console.log(inputLoginUsername.textContent);

// const userAcc = accs.find(
//   acc => acc.userName === inputLoginUsername.textContent
//   );
//   console.log(userAcc);
//   // if (inputLoginUsername.textContent === )
// };

// // const loginFunction2 = loginFunction(accounts);

// // btnLogin.addEventListener('click', loginFunction(accounts));

// btnLogin.addEventListener('click', function () {
//   console.log(inputLoginUsername.value);
// });

// console.log(inputLoginUsername.value === '');

let currAcc = '';

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(typeof inputLoginUsername.value);
  // console.log(typeof inputLoginUsername.value);
  currAcc = accounts.find(acc => acc.userName === inputLoginUsername.value);
  // console.log(currAcc);

  console.log(typeof currAcc?.pin);
  console.log(typeof inputLoginPin.value);

  if (Number(inputLoginPin.value) === currAcc?.pin) {
    labelWelcome.textContent = `Welcome, ${currAcc.owner}`;

    inputLoginUsername.value = inputLoginPin.value = '';

    containerApp.style.opacity = 100;

    displayMovements(currAcc.movements);

    displayBalance(currAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const senderAcc = currAcc;

  console.log('---------------');
  // console.log(inputLoginUsername.value);
  // console.log(senderAcc);

  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  // console.log(receiverAcc.userName);

  const amount = Number(inputTransferAmount.value);

  if (amount <= senderAcc.balance) {
    // console.log('Before', senderAcc.movements);
    senderAcc.movements.push(-amount);
    console.log('After', senderAcc.movements);

    // console.log('Before', receiverAcc.movements);
    receiverAcc.movements.push(amount);
    console.log('After', receiverAcc.movements);

    inputTransferTo.value = inputTransferAmount.value = '';

    displayMovements(currAcc.movements);

    displayBalance(currAcc);
  }
});

////////////////////////////////// Vid 021 The findIndex method

// let Arrrrrr = [1, 2, 3, 4, 5];
// console.log(Arrrrrr.splice(2, 1));
// console.log(Arrrrrr);

// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  const idAccountToDelete = accounts.findIndex(
    acc => acc.userName === inputCloseUsername?.value
  );

  if (
    currAcc.userName === inputCloseUsername?.value &&
    currAcc.pin === Number(inputClosePin?.value)
  ) {
    accounts.splice(idAccountToDelete, 1);
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
});

////////////////////////////////// Vid 022 some and every

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currAcc.movements.some(elm => elm > Number(inputLoanAmount.value) * 0.1)
  ) {
    currAcc.movements.push(Number(inputLoanAmount.value));
    console.log(currAcc.movements);

    displayMovements(currAcc.movements);

    displayBalance(currAcc);

    inputLoanAmount.value = '';
  }
});
