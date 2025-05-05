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

// import "./ExpenseForm.css";

// function ExpenseForm() {
//   return (
//     <form>
//       <div className="new-expense__controls">
//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text"></input>
//         </div>

//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.o1"></input>
//         </div>

//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2025-01-01" max="2030-01-01"></input>
//         </div>

//         {/* //// */}
//       </div>

//       {/* /////////// */}

//       <div className="new-expense__actions">
//         <button type="submit"> Add Expense</button>
//       </div>
//     </form>
//   );
// }

// export default ExpenseForm;

////////////////////////////////////////////////////////////////////////

////////////////// Video 008 Listening to user input

import React from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  function titleChengeHandler(event) {
    console.log("Title changed");
    // console.log(event);
    console.log(event.target.value);
  }
  return (
    <form>
      <div className="new-expense__controls">
        {/* //// */}

        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChengeHandler}></input>
        </div>

        {/* //// */}

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.o1"></input>
        </div>

        {/* //// */}

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2025-01-01" max="2030-01-01"></input>
        </div>

        {/* //// */}
      </div>

      {/* /////////// */}

      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
