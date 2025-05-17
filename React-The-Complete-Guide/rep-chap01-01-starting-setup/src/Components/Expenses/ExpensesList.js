import "./ExpensesList.css";
import MyExpenseItem from "./MyExpenseItem";

function ExpensesList(props) {
  let displayContent = (
    <h2 className="expenses-list__fallback"> No Expenses found !!! </h2>
  );

  if (props.content.length > 0) {
    displayContent = props.content.map((eachExpense) => (
      <MyExpenseItem
        key={eachExpense.id}
        title={eachExpense.title}
        amount={eachExpense.amount}
        date={eachExpense.date}
      ></MyExpenseItem>
    ));
  }

  return <ul className="expenses-list ">{displayContent}</ul>;
}

export default ExpensesList;
