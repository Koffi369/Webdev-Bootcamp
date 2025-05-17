// import MyExpenseItem from "./MyExpenseItem";

// import "./Expenses.css";

// import Card from "../UI/Card";

// function Expenses() {
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
//     <Card className="expenses">
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
//     </Card>
//   );
// }

// export default Expenses;

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 5 Rendering lit and Conditional contents

///////////////////////////////////////////////////////////////////////////////////////

//

//

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 002 Rendering a lit of data
//

//

// import React, { useState } from "react";
// import MyExpenseItem from "./MyExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";

// import "./Expenses.css";

// import Card from "../UI/Card";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };
//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />
//       {/* <MyExpenseItem
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
//       ></MyExpenseItem> */}

//       {props.expenseData.map((eachExpense) => (
//         <MyExpenseItem
//           key={eachExpense.id}
//           title={eachExpense.title}
//           amount={eachExpense.amount}
//           date={eachExpense.date}
//         ></MyExpenseItem>
//       ))}
//     </Card>
//   );
// }

// export default Expenses;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 004 Undeerstanding Key + Asignement

//

// import React, { useState } from "react";
// import MyExpenseItem from "./MyExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";

// import "./Expenses.css";

// import Card from "../UI/Card";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };
//   console.log(filteredYear);

//   const filteredData = props.expenseData.filter((eachExpense) => {
//     return eachExpense.date.getFullYear().toString() === filteredYear;
//   });
//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />

//       {filteredData.map((eachExpense) => (
//         <MyExpenseItem
//           key={eachExpense.id}
//           title={eachExpense.title}
//           amount={eachExpense.amount}
//           date={eachExpense.date}
//         ></MyExpenseItem>
//       ))}
//     </Card>
//   );
// }

// export default Expenses;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 005 outputing conditional content

//

//

// import React, { useState } from "react";
// import MyExpenseItem from "./MyExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";

// import "./Expenses.css";

// import Card from "../UI/Card";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };
//   console.log(filteredYear);

//   const filteredData = props.expenseData.filter((eachExpense) => {
//     return eachExpense.date.getFullYear().toString() === filteredYear;
//   });

//   let displayContent = <h2>No Expenes found</h2>;

//   if (filteredData.length > 0) {
//     displayContent = filteredData.map((eachExpense) => (
//       <MyExpenseItem
//         key={eachExpense.id}
//         title={eachExpense.title}
//         amount={eachExpense.amount}
//         date={eachExpense.date}
//       ></MyExpenseItem>
//     ));
//   }

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />

//       {displayContent}
//     </Card>
//   );
// }

// export default Expenses;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 006 Adding conditionnal return statement

//

//

import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";

import ExpensesList from "./ExpensesList";

import "./Expenses.css";

import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);

  const filteredData = props.expenseData.filter((eachExpense) => {
    return eachExpense.date.getFullYear().toString() === filteredYear;
  });

  // let displayContent = <h2>No Expenes found</h2>;

  // if (filteredData.length > 0) {
  //   displayContent = filteredData.map((eachExpense) => (
  //     <MyExpenseItem
  //       key={eachExpense.id}
  //       title={eachExpense.title}
  //       amount={eachExpense.amount}
  //       date={eachExpense.date}
  //     ></MyExpenseItem>
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* {displayContent} */}
      <ExpensesList content={filteredData}> </ExpensesList>
    </Card>
  );
}

export default Expenses;
