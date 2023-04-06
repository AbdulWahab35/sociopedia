import React from "react";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";
import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      // <h1>No Users Found</h1>;
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "300px",
          marginLeft: "40%",
        }}
      >
        <Alert
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              Ooops! No Users Found Yet
            </Marquee>
          }
        />
      </div>
    );
  }
  return (
    <>
      {items.map((user) => {
        return (
          <>
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.placeCount}
            />
            <br />
          </>
        );
      })}
    </>
  );
};

export default UsersList;
