import React, { useState } from "react";
import { Card, Button, Modal, Form, Input } from "antd";
import Map from "../../shared/components/Map";
import { ExclamationCircleFilled } from "@ant-design/icons";

const { Meta } = Card;
const { confirm } = Modal;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PlaceItems = ({ image, title, description, address, coordinates }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState(title);
  const [pata, setPata] = useState(address);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsEditModalOpen(false);
    setName(values.title);
    setPata(values.address);
    // console.log('name', values.title)
    // console.log('pata', values.address)
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
  };

  // Deleting any Place
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "This action cannot be undone !",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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
          <Button type="primary" onClick={showEditModal}>
            EDIT
          </Button>,
          <Button type="primary" danger onClick={showDeleteConfirm}>
            DELETE
          </Button>,
        ]}
        cover={<img alt={name} src={image} />}
      >
        <Meta title={name} />
        <strong>{pata}</strong>
      </Card>
      <br />
      <br />
      {/* For Showing Map */}
      <Modal
        width={"100%"}
        title=<h4>{address}</h4>
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Map center={coordinates} zoom={10} />
      </Modal>
      {/* For Editing the Places */}
      <Modal
        width={650}
        title="Note: You can only edit the title and Address. Thankyou!"
        open={isEditModalOpen}
        onOk={onFinish}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h3 style={{ color: "navy" }}>Enter Your New Title and Address</h3>
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input placeholder={name} />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input correct address!",
              },
            ]}
          >
            <Input placeholder={pata} />
          </Form.Item>

          <Form.Item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Button htmlType="submit" type="primary">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PlaceItems;
