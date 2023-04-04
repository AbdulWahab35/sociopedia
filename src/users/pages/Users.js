import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {

    const USERS = [
        {id: 1, name: 'Ali', placeCount: 3},
        {id: 1, name: 'Ali Ahmad', placeCount: 1},
        {id: 1, name: 'Ali Hassan', placeCount: 9},
    ]
  return <>
    <UsersList items={USERS}/>
  </>;
};

export default Users;
