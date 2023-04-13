import React from "react";
import { Card, Button, Modal } from "antd";
import { useState } from "react";
import Map from "../../shared/components/Map";
const { Meta } = Card;
const PlaceItems = ({ image, title, description, address, coordinates }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        hoverable
        style={{
          width: 400,
        }}
        actions={[
          <Button type="default" onClick={showModal}>
            VIEW ON MAP
          </Button>,
          <Button type="primary">EDIT</Button>,
          <Button type="primary" danger>
            DELETE
          </Button>,
        ]}
        cover={<img alt={title} src={image} />}
      >
        <Meta title={title} description={description} />
      </Card>
      <br />
      <br />
      <Modal
        title={address}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Map center={coordinates} zoom={16} />
      </Modal>
    </div>
  );
};

export default PlaceItems;
