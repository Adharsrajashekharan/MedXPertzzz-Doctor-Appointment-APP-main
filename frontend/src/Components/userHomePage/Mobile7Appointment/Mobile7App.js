import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../../../styles/componentStyles/userHome/Mobile7App.css";
import Image from "react-bootstrap/Image";
import mobile from "../../../Images/mobileAppointment.png";
import girl from "../../../Images/women.eb5c49c5.png";
import settings from "../../../Images/settings.png";
import address from "../../../Images/address.png";
import bookingz from "../../../Images/booking.png";
import { Button, Checkbox, Form, Input, Select, TimePicker } from "antd";
import { DatePicker, Space } from "antd";
import BookNow from "../../../Images/bookzz.png";




function Mobile7App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [form] = Form.useForm();

  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const onGenderChange = (value) => {
  switch (value) {
    case "male":
      form.setFieldsValue({
        note: "Hi, man!",
      });
      break;
    case "female":
      form.setFieldsValue({
        note: "Hi, lady!",
      });
      break;
    case "other":
      form.setFieldsValue({
        note: "Hi there!",
      });
      break;
    default:
  }
};

const onChange = (date, dateString) => {
  console.log(date, dateString);
};


  return (
    <div className="mobile7app">
      <Row>
        <h1>Book An Instant Appointment Now</h1>

        <Col lg={5} xs={12}>
          <div className="bookOnMobile">
            <div className="mobileScreen">
              <div className="applyForm">
                <h6 className="fw-bold mb-4 mt-3 text-primary">
                  BOOK APPOINTMENT
                </h6>
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  style={{
                    maxWidth: 700,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="department"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select Department"
                      onChange={onGenderChange}
                      allowClear
                      style={{ width: "190px", fontWeight: "900" }}
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    className="mt-4"
                    name="doctor"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select Doctor"
                      onChange={onGenderChange}
                      allowClear
                      style={{ width: "190px", fontWeight: "900" }}
                    >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item>
                    <Space direction="vertical">
                      <DatePicker
                        onChange={onChange}
                        style={{ width: "200px" }}
                      />
                    </Space>
                  </Form.Item>

                  <Form.Item>
                    <TimePicker.RangePicker style={{ width: "200px" }} />
                  </Form.Item>

                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "200px" }}
                  >
                    Book Now
                  </Button>
                </Form>

                <img src={bookingz} className="bookNow"></img>
                <img src={BookNow} className='booknow' ></img>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={7} xs={12}>
          <div className="mobilePhoto d-flex">
            <Image src={mobile} />
            <div className="girlmove">
              <Image src={girl} style={{ marginLeft: "-250px" }} />
            </div>

            <div>
              <Image src={address} className="phoneaddress" />
              <Image
                src={settings}
                className="phonesettings bounce-out-top  "
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Mobile7App;
