// import React, { useState } from "react";

// import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");

//   const goalInputChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 6 Styling react components

///////////////////////////////////////////////////////////////////////////////////////

//

//

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 002  setting dynamic inline style

//

//

// import React, { useState } from "react";

// import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

// const CourseInput = (props) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = (event) => {
//     if (event.target.value.trim().length > 0) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//     // console.log("enteredValue 1 =", enteredValue);
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     // console.log("enteredValue 2 =", enteredValue);

//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
//         <input
//           style={{
//             borderColor: isValid ? "black" : "red",
//             backgroundColor: isValid ? "transparent" : "salmon",
//           }}
//           type="text"
//           onChange={goalInputChangeHandler}
//         />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 003 Setting CSS classes dynamically

//

//

import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
    // console.log("enteredValue 1 =", enteredValue);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // console.log("enteredValue 2 =", enteredValue);

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(""); // Mine
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "" : "invalid"}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue} // Mine
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
