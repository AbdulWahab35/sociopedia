import React from "react";
import { Card, Row, Col, Avatar } from "antd";
const { Meta } = Card;

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // textAlign: "center",
      }}
    >
      <
        // xs={{ span: 24 }}
        // sm={{ span: 12 }}
        // md={{ span: 8 }}
        // lg={{ span: 8 }}
        // xl={{ span: 8 }}
      >
        <Card className="hover-card"
          hoverable
          style={{
            width: 300,
            borderRadius: "16px",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
          }}
        >
          <Row gutter={10}>
            <Col>
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                icon={<img alt="example" src={image} />}
              />
            </Col>
            <Col>
              <Meta className="hover-text"
                title={<h5>{name}</h5>}
                description={
                  <h4>
                    {placeCount}{" "}
                    {placeCount === 1 ? <h4>Place</h4> : <h4>Places</h4>}
                  </h4>
                }
              />
            </Col>
          </Row>
        </Card>
      </>
    </div>
  );
};

export default UserItem;
