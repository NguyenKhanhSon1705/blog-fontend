// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  const onFinish = (values) => {
    setContact({
      ...values,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [contact, setContact] = useState({});

  console.log(contact);

  return (
    <div className="w-full max-w-[800px] mx-auto md:p-5 rounded-md my-10">
      <h1 className="text-4xl text-center uppercase font-medium">Contact Us</h1>
      <Form
        className="mt-2 p-4 md:-p-0"
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <label className="text-lg">Name</label>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter yourname!",
            },
          ]}
        >
          <Input
            placeholder="Yourname"
            className="w-full h-9 py-6 px-4 text-xl"
          />
        </Form.Item>

        <label className="text-lg">Email</label>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            type="gmail"
            placeholder="your@gmail.com"
            className="w-full h-9 py-6 px-4 text-xl"
          />
        </Form.Item>
        <label className="text-lg">Contact Content</label>
        <Form.Item
          className="text-2xl"
          name="contact_content"
          rules={[
            {
              required: true,
              message: "Please enter your contact content",
            },
          ]}
        >
          <TextArea className="w-full h-9 p-2 text-xl" rows={4} />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item label={null}>
          <Button className="w-full p-5 text-xl" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
