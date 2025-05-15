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

////////////////// Video 006 Adding Conditional return statement
//

//

import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.content.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses found !!! </h2>;
  }

  return (
    <ul className="expenses-list ">
      {props.content.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
