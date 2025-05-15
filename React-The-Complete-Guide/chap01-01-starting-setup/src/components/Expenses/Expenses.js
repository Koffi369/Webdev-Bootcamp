// import Card from "../UI/Card";

// import ExpenseItem from "./ExpenseItem";

// import "./Expenses.css";

// function Expenses(props) {
//   return (
//     <Card className="expenses">
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       >
//         {" "}
//       </ExpenseItem>

//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       >
//         {" "}
//       </ExpenseItem>

//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       >
//         {" "}
//       </ExpenseItem>
//     </Card>
//   );
// }

// export default Expenses;

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

// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpensesFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         <ExpenseItem
//           title={props.items[0].title}
//           amount={props.items[0].amount}
//           date={props.items[0].date}
//         />
//         <ExpenseItem
//           title={props.items[1].title}
//           amount={props.items[1].amount}
//           date={props.items[1].date}
//         />
//         <ExpenseItem
//           title={props.items[2].title}
//           amount={props.items[2].amount}
//           date={props.items[2].date}
//         />
//         <ExpenseItem
//           title={props.items[3].title}
//           amount={props.items[3].amount}
//           date={props.items[3].date}
//         />
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

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

////////////////// Video 002 Rendering a list and conditional contents

//

//

// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpensesFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {/* <ExpenseItem
//           title={props.items[0].title}
//           amount={props.items[0].amount}
//           date={props.items[0].date}
//         />
//         <ExpenseItem
//           title={props.items[1].title}
//           amount={props.items[1].amount}
//           date={props.items[1].date}
//         />
//         <ExpenseItem
//           title={props.items[2].title}
//           amount={props.items[2].amount}
//           date={props.items[2].date}
//         />
//         <ExpenseItem
//           title={props.items[3].title}
//           amount={props.items[3].amount}
//           date={props.items[3].date}
//         /> */}
//         {console.log("props.items:", props.items)};
//         {props.items.map((expense) => (
//           <ExpenseItem
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           ></ExpenseItem>
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 004 Understanding Keys + Assignment

//

//

// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpensesFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />

//         {/* {props.items.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           ></ExpenseItem>
//         ))} */}

//         {filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 005 Outputting Conditionnal content
//

//

// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpensesFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   // console.log(filteredExpenses);

//   let displayContent = <p>No Expenses found</p>;

//   if (filteredExpenses.length > 0) {
//     displayContent = filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//   }

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />

//         {displayContent}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 006 Adding Conditional return statement
//

//

import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let displayContent = <p>No Expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   displayContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList content={filteredExpenses}> </ExpensesList>

        {/* {displayContent} */}
      </Card>
    </div>
  );
};

export default Expenses;
