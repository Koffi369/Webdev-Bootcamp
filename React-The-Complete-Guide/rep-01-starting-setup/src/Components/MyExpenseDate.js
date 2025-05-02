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

///////////////// Video 13

function MyExpenseDate(props) {
  const Month = props.date.toLocaleString("eng-US", { month: "long" });
  const day = props.date.toLocaleString("eng-US", { day: "2-digit" });
  const Year = props.date.getFullYear();
  return (
    <div>
      <div>{Month}</div>
      <div>{day}</div>
      <div>{Year}</div>
    </div>
  );
}

export default MyExpenseDate;
