// https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components

// function ExpenseItem(props) {
//   // const expenseDate = new Date(2021, 2, 28);
//   // const expenseTitle = "Car Insurance";
//   // const expenseAmount = 293.67;

//   // return <h4>This is my first component!</h4>;

//   return (
//     // <div className="expense-item">
//     //   <div>{expenseDate.toDateString()}</div>
//     //   <div className="expense-item__description">
//     //     <h2>{expenseTitle}</h2>
//     //     <div className="expense-item__price">${expenseAmount}</div>
//     //   </div>
//     // </div>

//     <div className="expense-item">
//       <div>{props.date.toDateString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// Video 014, 015

// import "./ExpenseItem.css";

// import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.date}></ExpenseDate>

//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

//

//

//

//

////////////////// Video 016

// import "./ExpenseItem.css";
// import Card from "./Card";

// import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date}></ExpenseDate>

//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </Card>
//   );
// }

// export default ExpenseItem;

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

////////////////// Video 002

//

// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
//   function clickHandler() {
//     console.log("Button Clicked");
//   }

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date}></ExpenseDate>

//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>

//         <button onClick={clickHandler}>MyButton</button>
//       </div>
//     </Card>
//   );
// }

// export default ExpenseItem;

//

//

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 004 Working with states

//

// import React, { useState } from "react";

// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// import ExpenseDate from "./ExpenseDate";

// function ExpenseItem(props) {
//   // const [title, setTitle] = useState(props.title);

//   // function clickHandler() {
//   //   setTitle("Updated"); // will change title's value on the screen to Updated
//   //   // title will hold the previous value (toilet paper) so its initial value will not change at the first click
//   //   // but at the second it will be ('Updated' the value we set previously with setTitle)
//   //   console.log("title =", title);
//   // }

//   return (
//     <Card className="expense-item">
//       {/* {console.log(props.date)} */}
//       <ExpenseDate date={props.date}></ExpenseDate>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>

//         {/* <button onClick={clickHandler}>MyButton</button> */}
//       </div>
//     </Card>
//   );
// }

// export default ExpenseItem;

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

import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
