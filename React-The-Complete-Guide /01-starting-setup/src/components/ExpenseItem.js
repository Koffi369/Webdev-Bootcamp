import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 293.67;

  // return <h4>This is my first component!</h4>;

  return (
    // <div className="expense-item">
    //   <div>{expenseDate.toDateString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{expenseTitle}</h2>
    //     <div className="expense-item__price">${expenseAmount}</div>
    //   </div>
    // </div>

    <div className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

// https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components
