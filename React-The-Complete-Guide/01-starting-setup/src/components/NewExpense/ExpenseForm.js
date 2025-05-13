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

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 008 Listening to user input

// import React from "react";

// import "./ExpenseForm.css";

// function ExpenseForm() {
//   function titleChengeHandler(event) {
//     console.log("Title changed");
//     // console.log(event);
//     console.log(event.target.value);
//   }
//   return (
//     <form>
//       <div className="new-expense__controls">
//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChengeHandler}></input>
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

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 009 Working with multiple States

//

//

// import React, { useState } from "react";

// import "./ExpenseForm.css";

// function ExpenseForm() {
//   const [enteredtitle, setEnteredTitle] = useState("");
//   const [enteredamount, setEnteredAmount] = useState("");
//   const [entereddate, setEnteredDate] = useState("");

//   function titleChengeHandler(event) {
//     console.log("Title changed");
//     // console.log(event);
//     // console.log(event.target.value);
//     setEnteredTitle(event.target.value);
//   }

//   function amountChengeHandler(event) {
//     console.log("Amount changed");
//     // console.log(event.target.value);
//     setEnteredAmount(event.target.value);
//   }

//   function datetChengeHandler(event) {
//     console.log("Date changed");
//     // console.log(event.target.value);
//     setEnteredDate(event.target.value);
//   }
//   return (
//     <form>
//       <div className="new-expense__controls">
//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChengeHandler}></input>
//         </div>

//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.o1"
//             onChange={amountChengeHandler}
//           ></input>
//         </div>

//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2025-01-01"
//             max="2030-01-01"
//             onChange={datetChengeHandler}
//           ></input>
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

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 012 Handling Form submission

//

//

// import React, { useState } from "react";

// import "./ExpenseForm.css";

// function ExpenseForm() {
//   const [enteredtitle, setEnteredTitle] = useState("");
//   const [enteredamount, setEnteredAmount] = useState("");
//   const [entereddate, setEnteredDate] = useState("");

//   console.log("enteredtitle init: ", enteredtitle);
//   console.log("enteredamount init: ", enteredamount);
//   console.log("entereddate:  init", entereddate);

//   function titleChengeHandler(event) {
//     console.log("Title changed");
//     // console.log(event);
//     // console.log(event.target.value);
//     setEnteredTitle(event.target.value);
//   }

//   function amountChengeHandler(event) {
//     console.log("Amount changed");
//     // console.log(event.target.value);
//     setEnteredAmount(event.target.value);
//   }

//   function datetChengeHandler(event) {
//     console.log("Date changed");
//     // console.log(event.target.value);
//     setEnteredDate(event.target.value);
//   }

//   function submitFormHandler(event) {
//     event.preventDefault();

//     const enteredData = {
//       title: enteredtitle,
//       amount: enteredamount,
//       date: entereddate,
//     };

//     console.log(enteredData);
//     console.log("enteredtitle 1: ", enteredtitle);
//     console.log("enteredamount 1: ", enteredamount);
//     console.log("entereddate 1: ", entereddate);

//     setEnteredTitle("");
//     setEnteredAmount("");
//     setEnteredDate("");

//     console.log("enteredtitle 2: ", enteredtitle);
//     console.log("enteredamount 2: ", enteredamount);
//     console.log("entereddate:  2", entereddate);
//   }

//   return (
//     <form onSubmit={submitFormHandler}>
//       <div className="new-expense__controls">
//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             value={enteredtitle}
//             onChange={titleChengeHandler}
//           ></input>
//         </div>

//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.o1"
//             value={enteredamount}
//             onChange={amountChengeHandler}
//           ></input>
//         </div>

//         {/* //// */}

//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2025-01-01"
//             max="2030-01-01"
//             value={entereddate}
//             onChange={datetChengeHandler}
//           ></input>
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

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 014 Child-to-Parent Component Communication (Bottom-up)

//

//

import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [entereddate, setEnteredDate] = useState("");

  function titleChengeHandler(event) {
    console.log("Title changed");

    setEnteredTitle(event.target.value);
  }

  function amountChengeHandler(event) {
    console.log("Amount changed");
    setEnteredAmount(event.target.value);
  }

  function datetChengeHandler(event) {
    console.log("Date changed");
    setEnteredDate(event.target.value);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredData = {
      title: enteredtitle,
      amount: enteredamount,
      // date: entereddate,
      date: new Date(entereddate),
    };

    props.onsaveExpenseData(enteredData);
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        {/* //// */}

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredtitle}
            onChange={titleChengeHandler}
          ></input>
        </div>

        {/* //// */}

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.o1"
            value={enteredamount}
            onChange={amountChengeHandler}
          ></input>
        </div>

        {/* //// */}

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2025-01-01"
            max="2030-01-01"
            value={entereddate}
            onChange={datetChengeHandler}
          ></input>
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
