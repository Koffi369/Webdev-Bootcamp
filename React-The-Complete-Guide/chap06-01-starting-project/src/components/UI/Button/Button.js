// import React from "react";

// import "./Button.css";

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

// export default Button;

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

////////////////// Video 007 Using CSS Modules

//

//

import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
