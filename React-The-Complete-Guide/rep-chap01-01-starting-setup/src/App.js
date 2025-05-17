// // export NODE_OPTIONS=--openssl-legacy-provider
// // PORT=3001 npm start

//
//
//
//

// import MyExpenseItem from "./Components/MyExpenseItem";

// function App() {
//   return (
//     <div>
//       <MyExpenseItem></MyExpenseItem>
//       <h2>Let's get started!</h2>
//     </div>
//   );
// }

// export default App;

//
//
//
//

///////////////// Video 13

// import MyExpenseItem from "./Components/MyExpenseItem";

// function App() {
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
//       <h2>Let's get started!</h2>
//       {/* <MyExpenseItem></MyExpenseItem> */}

//       <MyExpenseItem
//         title={expenses[0].title}
//         amount={expenses[0].amount}
//         date={expenses[0].date}
//       ></MyExpenseItem>

//       <MyExpenseItem
//         title={expenses[1].title}
//         amount={expenses[1].amount}
//         date={expenses[1].date}
//       ></MyExpenseItem>

//       <MyExpenseItem
//         title={expenses[2].title}
//         amount={expenses[2].amount}
//         date={expenses[2].date}
//       ></MyExpenseItem>
//     </div>
//   );
// }

// export default App;

//

//

//

//

///////////////// Video 16

// // import MyExpenseItem from "./Components/MyExpenseItem";

// import Expenses from "./Components/Expenses/Expenses";

// function App() {
//   // const expenses = [
//   //   {
//   //     id: "e1",
//   //     title: "Toilet Paper",
//   //     amount: 94.12,
//   //     date: new Date(2020, 7, 14),
//   //   },
//   //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   //   {
//   //     id: "e3",
//   //     title: "Car Insurance",
//   //     amount: 294.67,
//   //     date: new Date(2021, 2, 28),
//   //   },
//   //   {
//   //     id: "e4",
//   //     title: "New Desk (Wooden)",
//   //     amount: 450,
//   //     date: new Date(2021, 5, 12),
//   //   },
//   // ];

//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <Expenses className="expenses"></Expenses>
//     </div>
//   );
// }

// export default App;

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 4

///////////////////////////////////////////////////////////////////////////////////////

//

//

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 008
//

// // import MyExpenseItem from "./Components/MyExpenseItem";

// import Expenses from "./Components/Expenses/Expenses";
// import NewExpense from "./Components/NewExpense/NewExpense";

// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <NewExpense></NewExpense>
//       <Expenses className="expenses"></Expenses>
//     </div>
//   );
// }

// export default App;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 014 Child parent component communication

//

//

// import Expenses from "./Components/Expenses/Expenses";
// import NewExpense from "./Components/NewExpense/NewExpense";

// function App() {
//   function addExpenseHandler(expenseData) {
//     console.log("From App.js ", expenseData);
//   }
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
//       <Expenses className="expenses"></Expenses>
//     </div>
//   );
// }

// export default App;

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 5 Rendering list and Conditional contents

///////////////////////////////////////////////////////////////////////////////////////

//

//

import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyExpenses = [
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
  const [expenseList, setExpenseList] = useState(dummyExpenses);
  function addExpenseHandler(expenseData) {
    console.log("From App.js ", expenseData);

    setExpenseList((prevState) => [expenseData, ...prevState]);
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses className="expenses" expenseData={expenseList}></Expenses>
    </div>
  );
}

export default App;
