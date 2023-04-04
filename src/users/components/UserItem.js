import React from "react";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

const UserItem = ({ key, id, image, name, placeCount }) => {
  return (
    <Row
    style={{
      display: "flex",
      // flexDirection: "row",
      justifyContent: "center",
      // alignItems: "center",
      // textAlign: "center",
    }}
    >
      <Col span={6}>
        <Card
          hoverable
          style={{
            width: 300,
            borderRadius: "16px",
            marginRight: "24px",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
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
      </Col>
    </Row>
  );
};

export default UserItem;
