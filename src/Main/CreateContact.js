import React from "react";
import { Form, Input, Button, Space, Select, Switch, message } from "antd";
import Context from "./Context";
import FormItem from "antd/lib/form/FormItem";
import { DatePicker } from 'antd';
// import moment from 'moment';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;

const CreateContact = ({ onCancelClick }) => {
  const [form, isValid] = Form.useForm();

  const { addNewContact } = React.useContext(Context);

  const onFormFinish = (values) => {
    addNewContact(values);
    onCancelClick();
  };
  const successAdd = () => {
    console.log(isValid)
    if (isValid){
      message.info("Contact was successfully added!")
    }
  }
  
  
  return (
    <Form form={form} onFinish={onFormFinish}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input contact name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input phone number",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <FormItem 
        name="birthday"
        label="Birthday"
        rules={[
          {
            required: true,
            message: "Please input phone number",
          },
        ]}>
        <DatePicker format={dateFormatList} />
      </FormItem>

      <FormItem 
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </FormItem>

      <FormItem
        name="isEmergencyContact"
        label="Is Emergency Contact?">
        <Switch/>
      </FormItem>
        
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" onClick={successAdd}>
            Add Contact
          </Button>
          <Button type="primary" danger onClick={onCancelClick}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CreateContact;
