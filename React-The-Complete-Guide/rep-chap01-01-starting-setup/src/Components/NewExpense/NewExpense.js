//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 4

///////////////////////////////////////////////////////////////////////////////////////

//

//

// import React from "react";

// import ExpenseForm from "./ExpenseForm";
// import "./NewExpense.css";

// const NewExpense = (props) => {

//   return (
//     <div className="new-expense">
//       <ExpenseForm  />
//     </div>
//   );
// };

// export default NewExpense;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 014 Child parent component communication

//

//

import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  function saveExpenseDataHandler(enteredExpenseData) {
    const updatedExpenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log("From NewExpense (added id)", updatedExpenseData);
    props.onAddExpense(updatedExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpeneData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 5 Rendering lit and Conditional contents

///////////////////////////////////////////////////////////////////////////////////////

//

//
