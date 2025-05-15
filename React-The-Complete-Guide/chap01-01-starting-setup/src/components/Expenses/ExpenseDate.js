import "./ExpenseDate.css";

import Card from "../UI/Card";

function ExpenseDate(props) {
  const Month = props.date.toLocaleString("eng-US", { month: "long" });
  const day = props.date.toLocaleString("eng-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  // console.log(props.date);
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
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
