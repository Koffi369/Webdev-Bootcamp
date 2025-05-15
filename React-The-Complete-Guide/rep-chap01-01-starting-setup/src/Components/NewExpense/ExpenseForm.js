//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 5 Rendering lit and Conditional contents

///////////////////////////////////////////////////////////////////////////////////////

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 008

// import React from "react";

// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   function titleHangler(event) {
//     console.log(event.target.value);
//   }
//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleHangler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.01" />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2019-01-01" max="2022-12-31" />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 009

// import React, { useState } from "react";

// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   function titleChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredTitle(event.target.value);
//   }

//   function amountChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredAmount(event.target.value);
//   }

//   function dateChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredDate(event.target.value);
//   }
//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHangler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHangler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHangler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

////////////////////////////////////////////////////////////////////////

////////////////// Video 0012 handling form submission

// import React, { useState } from "react";

// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   function titleChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredTitle(event.target.value);
//   }

//   function amountChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredAmount(event.target.value);
//   }

//   function dateChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredDate(event.target.value);
//   }

//   function sumitFormHandler(event) {
//     event.preventDefault();

//     const enteredData = {
//       title: enteredTitle,
//       amount: Number(enteredAmount),
//       date: new Date(enteredDate),
//     };
//     console.log(enteredData);
//   }

//   return (
//     <form onSubmit={sumitFormHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             onChange={titleChangeHangler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHangler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHangler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

////////////////////////////////////////////////////////////////////////

////////////////// Video 013 Adding two way binding

// import React, { useState } from "react";

// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   function titleChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredTitle(event.target.value);
//   }

//   function amountChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredAmount(event.target.value);
//   }

//   function dateChangeHangler(event) {
//     console.log(event.target.value);
//     setEnteredDate(event.target.value);
//   }

//   function sumitFormHandler(event) {
//     event.preventDefault();

//     const enteredData = {
//       title: enteredTitle,
//       amount: Number(enteredAmount),
//       date: new Date(enteredDate),
//     };
//     console.log(enteredData);

//     setEnteredTitle("");
//     setEnteredAmount("");
//     setEnteredDate("");
//   }

//   return (
//     <form onSubmit={sumitFormHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             value={enteredTitle}
//             onChange={titleChangeHangler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             value={enteredAmount}
//             onChange={amountChangeHangler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             value={enteredDate}
//             onChange={dateChangeHangler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

////////////////////////////////////////////////////////////////////////

////////////////// Video 014 Child parent component communication

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHangler(event) {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  }

  function amountChangeHangler(event) {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  }

  function dateChangeHangler(event) {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  }

  function sumitFormHandler(event) {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    console.log("From ExpenseForm", enteredData);
    props.onSaveExpeneData(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={sumitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHangler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHangler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHangler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
