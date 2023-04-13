import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Aleena",
      placeCount: 3,
      image:
        "https://funylife.in/wp-content/uploads/2022/11/20221105_171626-1024x1024.jpg",
    },
    {
      id: "u2",
      name: "Aliya",
      placeCount: 1,
      image:
        "https://funylife.in/wp-content/uploads/2022/11/20221105_165117-1024x1024.jpg",
    },
    {
      id: "u3",
      name: "Aleeha",
      placeCount: 9,
      image:
        "https://funylife.in/wp-content/uploads/2022/11/20221105_173754-1024x1024.jpg",
    },
  ];
  return (
    <>
      <UsersList items={USERS} />
    </>
  );
};

export default Users;
