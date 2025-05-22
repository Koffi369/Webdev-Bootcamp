import React from "react";

// DummyList = [];

import Card from "../UI/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} year old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
