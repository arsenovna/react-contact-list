import React from "react";
import { Table, Space, Button, Divider } from "antd";
import Context from "./Context";
import moment from 'moment';

const ContactList = ({ onAddNewClick }) => {
  const { contacts } = React.useContext(Context);

  console.log(contacts)

  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      render: birthday => moment(birthday._d).format('DD.MM.YY')
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Is Emergency Contact",
      dataIndex: "isEmergencyContact",
      key: "isEmergencyContact",
      render: isEmergencyContact => {
        if(isEmergencyContact){
          return "✔️"
        } else {
          return "-"
        }
      }
    },
  ];

  return (
    <>
      <Space>
        <Button type="primary" onClick={onAddNewClick}>
          Add new contact
        </Button>
      </Space>
      <Divider />
      <Table dataSource={contacts} columns={columns} />
    </>
  );
};

export default ContactList;
