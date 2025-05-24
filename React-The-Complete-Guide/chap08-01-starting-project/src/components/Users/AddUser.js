// import React, { useState } from "react";

// import Card from "../UI/Card";
// import styles from "./AddUser.module.css";
// import Button from "../UI/Button";
// import ErrorModal from "../UI/ErrorModal";

// function AddUser(props) {
//   const [enteredUsername, setenteredUsername] = useState("");
//   const [enteredAge, setenteredAge] = useState("");

//   const [error, setError] = useState("");
//   console.log("error:", error);

//   function addUserHandler(event) {
//     event.preventDefault();

//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         errorTitle: "Invalid input",
//         errorMessage: "Please enter a valid name and age",
//       });
//       return;
//     }

//     if (Number(enteredAge) < 1) {
//       setError({
//         errorTitle: "Invalid age",
//         errorMessage: "Please enter a valid  age",
//       });
//       return;
//     }

//     // console.log("setenteredUsername :", enteredUsername);
//     // console.log("setenteredAge :", enteredAge);

//     props.onAddUser(enteredUsername, enteredAge);

//     setenteredUsername("");
//     setenteredAge("");
//   }

//   function usernameChangeHandler(event) {
//     setenteredUsername(event.target.value);
//   }

//   function ageChangeHandler(event) {
//     setenteredAge(event.target.value);
//   }

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <div>
//       {/* <ErrorModa errorTitle= {}  errorMessage = {} actions = {}></ErrorModal> */}
//       {error && (
//         <ErrorModal
//           errorTitle={error.errorTitle}
//           errorMessage={error.errorMessage}
//           onclickOkay={errorHandler}
//         ></ErrorModal>
//       )}

//       <Card className={styles.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="Username">Username</label>
//           <input
//             id="username"
//             type="text"
//             onChange={usernameChangeHandler}
//             value={enteredUsername}
//           ></input>
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="text"
//             onChange={ageChangeHandler}
//             value={enteredAge}
//           ></input>
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </div>
//   );
// }

// export default AddUser;

//

//

///////////////////////////////////////////////////////////////////////////////////////

////////////////////                Chap 09_Diving_Deeper_Working_with_Fragments,_Portals_&_Refs

///////////////////////////////////////////////////////////////////////////////////////

//

//

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 003 Creating a wrapper component

//

//

// import React, { useState } from "react";

// import Card from "../UI/Card";
// import styles from "./AddUser.module.css";
// import Button from "../UI/Button";
// import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

// function AddUser(props) {
//   const [enteredUsername, setenteredUsername] = useState("");
//   const [enteredAge, setenteredAge] = useState("");

//   const [error, setError] = useState("");
//   console.log("error:", error);

//   function addUserHandler(event) {
//     event.preventDefault();

//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         errorTitle: "Invalid input",
//         errorMessage: "Please enter a valid name and age",
//       });
//       return;
//     }

//     if (Number(enteredAge) < 1) {
//       setError({
//         errorTitle: "Invalid age",
//         errorMessage: "Please enter a valid  age",
//       });
//       return;
//     }

//     // console.log("setenteredUsername :", enteredUsername);
//     // console.log("setenteredAge :", enteredAge);

//     props.onAddUser(enteredUsername, enteredAge);

//     setenteredUsername("");
//     setenteredAge("");
//   }

//   function usernameChangeHandler(event) {
//     setenteredUsername(event.target.value);
//   }

//   function ageChangeHandler(event) {
//     setenteredAge(event.target.value);
//   }

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <Wrapper>
//       {/* <ErrorModa errorTitle= {}  errorMessage = {} actions = {}></ErrorModal> */}
//       {error && (
//         <ErrorModal
//           errorTitle={error.errorTitle}
//           errorMessage={error.errorMessage}
//           onclickOkay={errorHandler}
//         ></ErrorModal>
//       )}

//       <Card className={styles.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="Username">Username</label>
//           <input
//             id="username"
//             type="text"
//             onChange={usernameChangeHandler}
//             value={enteredUsername}
//           ></input>
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="text"
//             onChange={ageChangeHandler}
//             value={enteredAge}
//           ></input>
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </Wrapper>
//   );
// }

// export default AddUser;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 004 React fragment

//

//

// import React, { useState } from "react";

// import Card from "../UI/Card";
// import styles from "./AddUser.module.css";
// import Button from "../UI/Button";
// import ErrorModal from "../UI/ErrorModal";
// // import Wrapper from "../Helpers/Wrapper";

// function AddUser(props) {
//   const [enteredUsername, setenteredUsername] = useState("");
//   const [enteredAge, setenteredAge] = useState("");

//   const [error, setError] = useState("");
//   console.log("error:", error);

//   function addUserHandler(event) {
//     event.preventDefault();

//     if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
//       setError({
//         errorTitle: "Invalid input",
//         errorMessage: "Please enter a valid name and age",
//       });
//       return;
//     }

//     if (Number(enteredAge) < 1) {
//       setError({
//         errorTitle: "Invalid age",
//         errorMessage: "Please enter a valid  age",
//       });
//       return;
//     }

//     // console.log("setenteredUsername :", enteredUsername);
//     // console.log("setenteredAge :", enteredAge);

//     props.onAddUser(enteredUsername, enteredAge);

//     setenteredUsername("");
//     setenteredAge("");
//   }

//   function usernameChangeHandler(event) {
//     setenteredUsername(event.target.value);
//   }

//   function ageChangeHandler(event) {
//     setenteredAge(event.target.value);
//   }

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     // <>
//     //   {/* <ErrorModa errorTitle= {}  errorMessage = {} actions = {}></ErrorModal> */}
//     //   {error && (
//     //     <ErrorModal
//     //       errorTitle={error.errorTitle}
//     //       errorMessage={error.errorMessage}
//     //       onclickOkay={errorHandler}
//     //     ></ErrorModal>
//     //   )}

//     //   <Card className={styles.input}>
//     //     <form onSubmit={addUserHandler}>
//     //       <label htmlFor="Username">Username</label>
//     //       <input
//     //         id="username"
//     //         type="text"
//     //         onChange={usernameChangeHandler}
//     //         value={enteredUsername}
//     //       ></input>
//     //       <label htmlFor="age">Age (Years)</label>
//     //       <input
//     //         id="age"
//     //         type="text"
//     //         onChange={ageChangeHandler}
//     //         value={enteredAge}
//     //       ></input>
//     //       <Button type="submit">Add User</Button>
//     //     </form>
//     //   </Card>
//     // </>

//     <React.Fragment>
//       {/* <ErrorModa errorTitle= {}  errorMessage = {} actions = {}></ErrorModal> */}
//       {error && (
//         <ErrorModal
//           errorTitle={error.errorTitle}
//           errorMessage={error.errorMessage}
//           onclickOkay={errorHandler}
//         ></ErrorModal>
//       )}

//       <Card className={styles.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="Username">Username</label>
//           <input
//             id="username"
//             type="text"
//             onChange={usernameChangeHandler}
//             value={enteredUsername}
//           ></input>
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="text"
//             onChange={ageChangeHandler}
//             value={enteredAge}
//           ></input>
//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//     </React.Fragment>
//   );
// }

// export default AddUser;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 007 Working with Refs

//

//

import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");
  console.log("error:", error);

  function addUserHandler(event) {
    event.preventDefault();
    console.log("nameInputRef: ", nameInputRef.current.value);
    console.log("ageInputRef: ", ageInputRef.current.value);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        errorTitle: "Invalid input",
        errorMessage: "Please enter a valid name and age",
      });
      return;
    }

    if (Number(enteredAge) < 1) {
      setError({
        errorTitle: "Invalid age",
        errorMessage: "Please enter a valid  age",
      });
      return;
    }

    // console.log("setenteredUsername :", enteredUsername);
    // console.log("setenteredAge :", enteredAge);

    props.onAddUser(enteredUsername, enteredAge);

    setenteredUsername("");
    setenteredAge("");
  }

  function usernameChangeHandler(event) {
    setenteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setenteredAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {/* <ErrorModa errorTitle= {}  errorMessage = {} actions = {}></ErrorModal> */}
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
          onclickOkay={errorHandler}
        ></ErrorModal>
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="Username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
