import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { Table, Space, Modal, Dialog } from "antd";
import axios from "axios";
import DialogAdd from "./DialogAdd";
import DialogDetail from "./DialogDetail";
// const themes = {
//   dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
//   light: `${process.env.PUBLIC_URL}/light-theme.css`,
// };
const baseURL = "https://training.morethanteam.tech/training/employees/";



const Home = () => {
  const [employees, setEmployees] = React.useState([]);
  const [isDialogAdd, setIsDialogAdd] = useState(false);
  const [isDialogDetail, setIsDialogDetail] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 250,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 350,
    },
    {
      title: "Birthday",
      dataIndex: "day_of_birth",
      width: 200,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <div>
            <button className="btn btn-outline-warning glo-button-margin" onClick={() =>openDialogDetail(employees.id)}>View</button>
            <button className="btn btn-outline-primary glo-button-margin">Update</button>
            <button className="btn btn-outline-danger glo-button-margin">Delete</button>
          </div>
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    //get all
    getEmployees();

    setIsDialogDetail(false)
  }, []);

  //get all

  const getEmployees = async () => {
    await axios.get(baseURL).then((response) => {
      setEmployees(response.data.result);
    });
  };
  //button add start

  const openDialogAdd = () => {
    setIsDialogAdd(true);
  };
  //button add end

  //button view start
  const openDialogDetail = (id) => {
    console.log("8888888888888888")
    console.log(id)
    setIsDialogDetail(true);
  };
  //button view end

  return (
    <>
      <div className="home-page">
        <div className="glo-button">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={openDialogAdd}
          >
            Add New
          </button>
        </div>

        <div className="glo-table">
          <Table
            columns={columns}
            key={employees.id}
            dataSource={employees}
            // pagination={{ pageSize: 20 }}
            scroll={{ y: 600 }}
          />
        </div>
        <DialogAdd open={isDialogAdd} setOpen={setIsDialogAdd} getEmployees={getEmployees} />
        <DialogDetail openDetail={isDialogDetail} setOpenDetail={setIsDialogDetail} id={employees.id}/>
      </div>
     
    </>
  );
};

export default Home;
