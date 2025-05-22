// // export NODE_OPTIONS=--openssl-legacy-provider
// // PORT=3008 npm start

import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  function addUserHandler(uName, uAge) {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }

  return (
    <div>
      <h2>Hello!!!!!!!!</h2>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={userList}> </UsersList>
    </div>
  );
}

export default App;
