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

// import React from "react";

// import "./NewExpense.css";

// import ExpenseForm from "./ExpenseForm";

// function NewExpense() {
//   return (
//     <div className="new-expense">
//       <ExpenseForm></ExpenseForm>
//     </div>
//   );
// }

// export default NewExpense;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 014 Child-to-Parent Component Communication (Bottom-up)

//

//

import React from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const localExpenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(localExpenseData); // the data at this stage will be rendered by the file NewExpense.js in the console

    props.onAddExpense(localExpenseData); // the data at this stage will be rendered by the file App.js in the console
  }
  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;

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
