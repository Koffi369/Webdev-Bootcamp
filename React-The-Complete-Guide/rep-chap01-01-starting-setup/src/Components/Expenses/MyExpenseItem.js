///////////////// Video 11

// import "./MyExpenseItem.css";

// function MyExpenseItem() {
//   return (
//     <div className="expense-item">
//       <div>March 28th 2021</div>
//       <div className="expense-item__description">
//         <h2>Car Insurance</h2>
//         <div className="expense-item__price">$ 294.67</div>
//       </div>
//     </div>
//   );
// }

// export default MyExpenseItem;

///////////////// Video 12

// import "./MyExpenseItem.css";

// function MyExpenseItem() {
//   const expenseDate = new Date(2021, 2, 28);
//   const expensTitle = "Car Insurance";
//   const expenseAmount = 294.67;

//   return (
//     <div className="expense-item">
//       <div>{expenseDate.toLocaleString()}</div>
//       <div className="expense-item__description">
//         <h2>{expensTitle}</h2>
//         <div className="expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );
// }

// export default MyExpenseItem;

///////////////// Video 13

// import "./MyExpenseItem.css";
// import MyExpenseDate from "./MyExpenseDate";

// function MyExpenseItem(props) {
//   // const expenseDate = new Date(2021, 2, 28);
//   // const expensTitle = "Car Insurance";
//   // const expenseAmount = 294.67;

//   return (
//     <div className="expense-item">
//       {/* <div>{expenseDate.toLocaleString()}</div> */}

//       <MyExpenseDate date={props.date}> </MyExpenseDate>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default MyExpenseItem;

///////////////// Video 16

import "./MyExpenseItem.css";
import MyExpenseDate from "./MyExpenseDate";

import Card from "../UI/Card";

function MyExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expensTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      {/* <div>{expenseDate.toLocaleString()}</div> */}

      <MyExpenseDate date={props.date}> </MyExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default MyExpenseItem;
