// function MyExpenseDate() {
//   return (
//     <div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// }

// export default MyExpenseDate;

//
//
//
//

// ///////////////// Video 13

// function MyExpenseDate(props) {
//   const Month = props.date.toLocaleString("eng-US", { month: "long" });
//   const day = props.date.toLocaleString("eng-US", { day: "2-digit" });
//   const Year = props.date.getFullYear();
//   return (
//     <div>
//       <div>{Month}</div>
//       <div>{day}</div>
//       <div>{Year}</div>
//     </div>
//   );
// }

// export default MyExpenseDate;

//
//
//
//

///////////////// Video 15

import "./MyExpenseDate.css";

import Card from "../UI/Card";

function MyExpenseDate(props) {
  const Month = props.date.toLocaleString("eng-US", { month: "long" });
  const day = props.date.toLocaleString("eng-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default MyExpenseDate;
