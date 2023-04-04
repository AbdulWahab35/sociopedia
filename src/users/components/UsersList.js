import React from "react";
import { Alert, Card } from "antd";
import Marquee from "react-fast-marquee";
import UserItem from "./UserItem";
const { Meta } = Card;

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Alert
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
            Ooops! No Users Found Yet. text.
          </Marquee>
        }
      />
    );
  }
  return (
    <ul>
      {items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placesCount={user.places}
          />
        );
      })}
      <Card
        hoverable
        style={{
          width: 240,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </ul>
  );
};

export default UsersList;
