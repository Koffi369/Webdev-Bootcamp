// // import ExpenseItem from "./components/ExpenseItem";

// // import Card from "./components/Card";

// import Expenses from "./components/Expenses/Expenses";

// function App() {
//   // console.log(new Date(8.64e15).toString());
//   // const time = Date.now();

//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//   return (
//     <div>
//       <h2>Hello Let's get started!</h2>
//       <Expenses items={expenses}></Expenses>
//     </div>
//   );
// }

// export default App;

//

//

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 4 React State and Working with Events

///////////////////////////////////////////////////////////////////////////////////////

//

//

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 007 Addind for input

// import Expenses from "./components/Expenses/Expenses";

// import NewExpense from "./components/NewExpense/NewExpense";

// function App() {
//   // console.log(new Date(8.64e15).toString());
//   // const time = Date.now();

//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//   return (
//     <div>
//       <h4>Hello Let's get started!</h4>

//       <NewExpense></NewExpense>

//       <Expenses items={expenses}></Expenses>
//     </div>
//   );
// }

// export default App;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 014 Child-to-Parent Component Communication (Bottom-up)

//

//

// import Expenses from "./components/Expenses/Expenses";

// import NewExpense from "./components/NewExpense/NewExpense";

// function App() {
//   // console.log(new Date(8.64e15).toString());
//   // const time = Date.now();

//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//   function addExpenseHandler(expense) {
//     console.log(expense);
//   }

//   return (
//     <div>
//       <h4>Hello Let's get started!</h4>

//       <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

//       <Expenses items={expenses}></Expenses>
//     </div>
//   );
// }

// export default App;

//

//

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 5 Rendering lit and Conditional contents

///////////////////////////////////////////////////////////////////////////////////////

//

//

//

//
//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 003 using stateful list

//

//

import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(dummy_expenses);

  function addExpenseHandler(expense) {
    // console.log(expense);
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h4>Hello Let's get started!</h4>

      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
