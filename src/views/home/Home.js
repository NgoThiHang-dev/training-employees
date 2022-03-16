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

//Chị map employee chỗ nào
//k có sử dụng map á

const Home = () => {
  const [employees, setEmployees] = React.useState([]);
  const [isDialogAdd, setIsDialogAdd] = useState(false);
  const [isDialogDetail, setIsDialogDetail] = useState(false);
  const [idForView, setIdForView] = useState(0);

  const openDialogDetail = () => {
    setIsDialogDetail(true);
  };

  const handleClickViewButton = (id) => {
    // console.log(id);
    return async function (event) {
      await setIdForView(id);
      // await openDialogDetail();
      await setIsDialogDetail(true);
    };

  };


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Birthday",
      dataIndex: "day_of_birth",
      width: 180,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 350,
    },

    {
      title: "Action",
      key: "action",
      render: (data) => {
        // console.log(data.id);
        return (
          <Space size="middle">
            <div>
              <button
                className="btn btn-outline-warning glo-button-margin"
                onClick={handleClickViewButton(data.id)}
              >
                View
              </button>
              <button className="btn btn-outline-primary glo-button-margin">
                Update
              </button>
              <button className="btn btn-outline-danger glo-button-margin">
                Delete
              </button>
            </div>
          </Space>
        );
      },
    },
  ];

  React.useEffect(() => {
    //get all
    getEmployees();

    setIsDialogDetail(false);
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
            scroll={{ y: 280 }}
          />
        </div>
        <DialogAdd
          open={isDialogAdd}
          setOpen={setIsDialogAdd}
          getEmployees={getEmployees}
        />
        <DialogDetail
          openDetail={isDialogDetail}
          setOpenDetail={setIsDialogDetail}
          id={employees.id}
        />
       
      </div>
    </>
  );
};


export default Home;
