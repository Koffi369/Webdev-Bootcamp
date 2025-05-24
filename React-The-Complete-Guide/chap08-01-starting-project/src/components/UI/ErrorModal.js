// import React from "react";
// import Card from "./Card";
// import styles from "./ErrorModal.module.css";
// import Button from "./Button";

// function ErrorModal(props) {
//   return (
//     <div>
//       <div className={styles.backdrop} onClick={props.onclickOkay}></div>
//       <Card className={styles.modal}>
//         <header className={styles.header}>
//           <h2>{props.errorTitle}</h2>
//         </header>

//         <div className={styles.content}>
//           <p>{props.errorMessage} </p>
//         </div>
//         <footer className={styles.actions}>
//           <Button onClick={props.onclickOkay}>Okay</Button>
//         </footer>
//       </Card>
//     </div>
//   );
// }

// export default ErrorModal;

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

// import React from "react";
// import Card from "./Card";
// import styles from "./ErrorModal.module.css";
// import Button from "./Button";
// import Wrapper from "../Helpers/Wrapper";

// function ErrorModal(props) {
//   return (
//     <Wrapper>
//       <div className={styles.backdrop} onClick={props.onclickOkay}></div>
//       <Card className={styles.modal}>
//         <header className={styles.header}>
//           <h2>{props.errorTitle}</h2>
//         </header>

//         <div className={styles.content}>
//           <p>{props.errorMessage} </p>
//         </div>
//         <footer className={styles.actions}>
//           <Button onClick={props.onclickOkay}>Okay</Button>
//         </footer>
//       </Card>
//     </Wrapper>
//   );
// }

// export default ErrorModal;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 004 React fragment

//

//

// import React from "react";
// import Card from "./Card";
// import styles from "./ErrorModal.module.css";
// import Button from "./Button";
// // import Wrapper from "../Helpers/Wrapper";

// function ErrorModal(props) {
//   return (
//     // <>
//     //   <div className={styles.backdrop} onClick={props.onclickOkay}></div>
//     //   <Card className={styles.modal}>
//     //     <header className={styles.header}>
//     //       <h2>{props.errorTitle}</h2>
//     //     </header>

//     //     <div className={styles.content}>
//     //       <p>{props.errorMessage} </p>
//     //     </div>
//     //     <footer className={styles.actions}>
//     //       <Button onClick={props.onclickOkay}>Okay</Button>
//     //     </footer>
//     //   </Card>
//     // </>

//     <React.Fragment>
//       <div className={styles.backdrop} onClick={props.onclickOkay}></div>
//       <Card className={styles.modal}>
//         <header className={styles.header}>
//           <h2>{props.errorTitle}</h2>
//         </header>

//         <div className={styles.content}>
//           <p>{props.errorMessage} </p>
//         </div>
//         <footer className={styles.actions}>
//           <Button onClick={props.onclickOkay}>Okay</Button>
//         </footer>
//       </Card>
//     </React.Fragment>
//   );
// }

// export default ErrorModal;

//

//

////////////////////////////////////////////////////////////////////////

////////////////// Video 006 Working with Portal

//

//

// import React from "react";
// import Card from "./Card";
// import styles from "./ErrorModal.module.css";
// import Button from "./Button";

// function ErrorModal(props) {
//   return (
//     <React.Fragment>
//       <div className={styles.backdrop} onClick={props.onclickOkay}></div>
//       <Card className={styles.modal}>
//         <header className={styles.header}>
//           <h2>{props.errorTitle}</h2>
//         </header>

//         <div className={styles.content}>
//           <p>{props.errorMessage} </p>
//         </div>
//         <footer className={styles.actions}>
//           <Button onClick={props.onclickOkay}>Okay</Button>
//         </footer>
//       </Card>
//     </React.Fragment>
//   );
// }

// export default ErrorModal;

import React from "react";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onclickOkay}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.errorTitle}</h2>
      </header>

      <div className={styles.content}>
        <p>{props.errorMessage} </p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onclickOkay}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onclickOkay={props.onclickOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          errorTitle={props.errorTitle}
          errorMessage={props.errorMessage}
          onclickOkay={props.onclickOkay}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
